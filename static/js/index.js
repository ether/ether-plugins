exports.aceSetAuthorStyle = function (hook_name, args, cb) {
  let colorm

  const nightColors = {
    toolbar: 'dark',
    background: 'super-dark',
    editor: 'dark',
  }

  const dayColors = {
    toolbar: 'super-light',
    background: 'light',
    editor: 'super-light',
  }

  if (window.matchMedia && window.matchMedia('(prefers-color-scheme: dark)').matches) {
    colorm = nightColors
  }
  else{
    colorm = dayColors
  }

  updateColor(colorm)
}

const updateColor = (colorm) => {

  const containers = ['editor', 'background', 'toolbar']
  const colors = ['super-light', 'light', 'dark', 'super-dark']

  const domsToUpdate = [
    $('html'),
    $('iframe[name=ace_outer]').contents().find('html'),
    $('iframe[name=ace_outer]')
        .contents()
        .find('iframe[name=ace_inner]')
        .contents()
        .find('html'),
  ];
  colors.forEach( (color)=> {
    containers.forEach( (container)=> {
      domsToUpdate.forEach( (el) =>{
        el.removeClass(color + '-' + container);
      });
    });
  });

  const new_classes = [];
  containers.forEach( (container)=> {
    new_classes.push(colorm[container] + '-' + container);
  });

  domsToUpdate.forEach( (el)=> {
    el.addClass(new_classes.join(' '));
  });
}
