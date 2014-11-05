Meteor.startup(function() {
  if(Meteor.isClient) {
    SEO.config({
      title: 'Meteor Vegas',
      meta: {
        'description': 'Зустріч ентузіастів Meteor.js у Києві, Україна'
      },
      og: {
        'image': Meteor.absoluteUrl('share-image.png')
      },
      ignore: {
        meta: ['fragment', 'viewport', 'msapplication-TileColor', 'msapplication-TileImage', 'msapplication-config'],
        link: ['stylesheet', 'apple-touch-icon', 'rel', 'shortcut icon', 'icon']
      }
    });
  }
});
