import { Meteor } from 'meteor/meteor';
import { ValidatedMethod } from 'meteor/mdg:validated-method';
import SimpleSchema from 'simpl-schema';


/*
 * Methods available for calls in client to server side.
 * TODO: softwareList will be irrelevant, as instructors can install software
 * themselves.  Ideally, 'create' button will make default windows or linux
 * instance, which the instructor sees as a class template.  Instructor will
 * then 'publish' template to make available as student machine.
 */
export const create = new ValidatedMethod({
  name: 'aws.create',
  validate: new SimpleSchema({
    softwareList: {
      type: String,
    },
  }).validator(),
  run({ softwareList }) {
    return aws.create({});
  },
});
/* TODO:
 *  Export const createTags = AWS.ec2.createTags(params, function(){});
 *  Export const asdf = [];
 */
