import {Meteor} from 'meteor/meteor';
import '../../../settings.json';
AWS.config.update({
  accessKeyId: AWS.accessKeyId,
  secretAccessKey: AWS.secretAccessKey,
  defaultRegion: AWS.defaultRegion
});
