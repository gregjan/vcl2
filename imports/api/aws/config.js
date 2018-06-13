import { Meteor } from 'meteor/meteor';
import AWS from 'aws-sdk';

AWS.config.update({
  accessKeyId: Meteor.settings.AWS.accessKeyId,
  secretAccessKey: Meteor.settings.AWS.secretAccessKey,
  defaultRegion: Meteor.settings.AWS.defaultRegion,
});
