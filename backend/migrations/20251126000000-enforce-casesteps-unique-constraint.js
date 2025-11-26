export async function up(queryInterface) {
  // Add explicit unique constraint to prevent duplicate steps
  // This enforces at database level that a step can only be associated with a case once
  await queryInterface.addConstraint('caseSteps', {
    fields: ['caseId', 'stepId'],
    type: 'unique',
    name: 'unique_caseid_stepid',
  });
}

export async function down(queryInterface) {
  await queryInterface.removeConstraint('caseSteps', 'unique_caseid_stepid');
}
