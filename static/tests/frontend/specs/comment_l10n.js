'use strict';

// create a new pad with comment before each test run
beforeEach(async function () {
  this.timeout(60000);
  await helper.aNewPad();
  await createComment();
  await changeEtherpadLanguageTo('en');
});

// ensure we go back to English to avoid breaking other tests:
after(async function () {
  await changeEtherpadLanguageTo('en');
});

it('uses default values when language was not localized yet', async function () {
  await changeEtherpadLanguageTo('oc');
  const outer$ = helper.padOuter$;

  // get the title of the comment
  const $changeToLabel = outer$('.comment-suggest').first();
  expect($changeToLabel.text()).to.be(
      '                                  Include suggested change             ');
});

it('localizes comment when Etherpad language is changed', async function () {
  await changeEtherpadLanguageTo('pt-br');
  const outer$ = helper.padOuter$;
  const commentId = getCommentId();

  // get the 'Suggested Change' label
  const $changeToLabel = outer$(`#${commentId} .from-label`).first();
  expect($changeToLabel.text()).to.be('Sugerir alteração de "" para');
});

it("localizes 'new comment' form when Etherpad language is changed", async function () {
  // make sure form was created before changing the language
  const inner$ = helper.padInner$;
  const outer$ = helper.padOuter$;
  const chrome$ = helper.padChrome$;

  // get the first text element out of the inner iframe
  const $firstTextElement = inner$('div').first();

  // get the comment button and click it
  $firstTextElement.sendkeys('{selectall}'); // needs to select content to add comment to
  const $commentButton = chrome$('.addComment');
  $commentButton.click();

  await changeEtherpadLanguageTo('pt-br');
  // get the 'Include suggested change' label
  const $changeToLabel = outer$('.new-comment label.label-suggestion-checkbox').first();
  expect($changeToLabel.text()).to.be('Incluir alteração sugerida');
});

/* ********** Helper functions ********** */

const createComment = async () => {
  const inner$ = helper.padInner$;
  const outer$ = helper.padOuter$;
  const chrome$ = helper.padChrome$;

  // Returns the first line div. Must be a function because Etherpad might replace the div with a
  // new div if the content changes.
  const $firstTextElement = () => inner$('div').first();

  // simulate key presses to delete content
  $firstTextElement().sendkeys('{selectall}'); // select all
  $firstTextElement().sendkeys('{del}'); // clear the first line
  $firstTextElement().sendkeys('This content will receive a comment'); // insert text

  // get the comment button and click it
  $firstTextElement().sendkeys('{selectall}'); // needs to select content to add comment to
  const $commentButton = chrome$('.addComment');
  $commentButton.click();

  // fill the comment form and submit it
  const $commentField = chrome$('textarea.comment-content');
  $commentField.val('My comment');
  const $hasSuggestion = outer$('#newComment .suggestion-checkbox');
  $hasSuggestion.click();
  const $suggestionField = outer$('textarea.to-value');
  $suggestionField.val('Change to this suggestion');
  const $submittButton = chrome$('.comment-buttons input[type=submit]');
  $submittButton.click();

  // wait until comment is created and comment id is set
  await helper.waitForPromise(() => getCommentId() != null);
};

const changeEtherpadLanguageTo = async (lang) => {
  const boldTitles = {
    'en': 'Bold (Ctrl+B)',
    'pt-br': 'Negrito (Ctrl-B)',
    'oc': 'Gras (Ctrl-B)',
  };
  const chrome$ = helper.padChrome$;

  // click on the settings button to make settings visible
  const $settingsButton = chrome$('.buttonicon-settings');
  $settingsButton.click();

  // select the language
  const $language = chrome$('#languagemenu');
  $language.val(lang);
  $language.change();

  // hide settings again
  $settingsButton.click();

  await helper.waitForPromise(
      () => chrome$('.buttonicon-bold').parent()[0].title === boldTitles[lang]);
};

const getCommentId = () => {
  const inner$ = helper.padInner$;
  const comment = inner$('.comment').first();
  const cls = comment.attr('class');
  const classCommentId = /(?:^| )(c-[A-Za-z0-9]*)/.exec(cls);
  const commentId = (classCommentId) ? classCommentId[1] : null;

  return commentId;
};
