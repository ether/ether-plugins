/* global $ */

$(() => {
  const filter = (query) => {
    const list = $('ul');
    if (!query.length) {
      list.removeClass('filtering');
    } else {
      list.addClass('filtering');
      const words = query.split(/\s+/);
      const regex = new RegExp(`(?=.*${words.join(')(?=.*')})`, 'i');
      list.find('li').each(function () {
        const item = $(this);
        const padId = item.find('a').text();
        item.toggleClass('visible', regex.test(padId));
      });
    }
  };
  const queryParams = new URLSearchParams(window.location.search);
  const searchBox = $('input');
  const q = queryParams.has('q') ? queryParams.get('q') : searchBox.val();
  filter(q);
  searchBox.val(q);
  searchBox.on('input', () => {
    const val = searchBox.val();
    queryParams.set('q', val);
    history.replaceState(null, '', `${window.location.pathname}?${queryParams.toString()}`);
    filter(val);
  });
});
