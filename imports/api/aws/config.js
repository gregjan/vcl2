import {Meteor} from 'meteor/meteor';

AWS.config.update({
  accessKeyId: Meteor.settings.AWS.accessKeyId,
  secretAccessKey: Meteor.settings.AWS.secretAccessKey,
  defaultRegion: Meteor.settings.AWS.defaultRegion
});
