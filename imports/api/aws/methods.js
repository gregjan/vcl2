import { ValidatedMethod } from 'meteor/mdg:validated-method';
import { SimpleSchema } from 'meteor/aldeed:simple-schema';

/* * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * /
 * Methods available for calls in client to server side.
 * TODO: softwareList will be irrelevant, as instructors can install software
 * themselves.  Ideally, 'create' button will make default windows or linux
 * instance, which the instructor sees as a class template.  Instructor will
 * then 'publish' template to make available as student machine.
 * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * */

// Use when creating new machines on AWS.
export const create = new ValidatedMethod({
  name: 'aws.create',
  validate: new SimpleSchema({
    os: { type: String },
    softwareList: { type: String },
  }).validator(),
  run({ os, softwareList }) {
    // create instance
  },
});


// This is for tagging AWS instances.
export const tag = new ValidatedMethod({
  name: 'aws.tag',
  validate: new SimpleSchema({

  }).validator(),
  run() {
    return aws.tag({});
  },
});

// Retrieves instance info for View.
export const getInstances = new ValidatedMethod({
  name: 'aws.getInstances',
  validate: new SimpleSchema({

  }).validator(),
  run() {},
});
