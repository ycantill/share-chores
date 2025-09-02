import { html } from 'lit';

export const renderChores = planItem =>
  planItem.chores.map(
    chore => html`
      <div class="activity">${chore.activity}</div>
      <div class="person">${chore.person}</div>
    `
  );
