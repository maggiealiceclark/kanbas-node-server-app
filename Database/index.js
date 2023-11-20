import courses from "./courses.json" assert { type: "json" };
import assert from 'assert';
import modules from "./modules.json";
import assignments from "./assignments.json";
import users from "./users.json";
import grades from "./grades.json";
import enrollments from "./enrollments.json";

assert.strictEqual(typeof modules, 'object', 'Expected modules to be an object');
assert.strictEqual(typeof assignments, 'object', 'Expected assignments to be an object');
assert.strictEqual(typeof users, 'object', 'Expected users to be an object');
assert.strictEqual(typeof grades, 'object', 'Expected grades to be an object');
assert.strictEqual(typeof enrollments, 'object', 'Expected enrollments to be an object');

export default {
  modules,
  assignments,
  users,
  grades,
  enrollments,
};

