import { LitElement, html, css } from 'lit';
import { differenceInDays, addDays, format, isAfter, isToday } from "date-fns";
import { es } from "date-fns/locale";
import { plan } from './plan.js';

class ShareChores extends LitElement {
  constructor() {
    super();

    this._startDate = new Date(2024, 2, 24, 0, 0, 0);
    this._endDate = new Date(2024, 4, 8, 0, 0, 0);
    this._today = new Date();
    this._plan = plan;
  }

  static styles = css`
    .plan {
      margin: 10px 10px 0px 10px;
      padding: 20px;
      font-size: 2em;
      border: 2px solid black;
      border-radius: 10px;

      .date {
        margin-bottom: 15px;
        font-size: 1.5em;
      }

      .chores {
        text-align: center;

        .activity {
          font-size: 0.8em;
          color: dimgray;
          margin-bottom: 10px;
          margin-top: 10px;
        }

        .person {
          border-bottom: 1px solid black;
          padding-bottom: 10px;
        }
      }
    }
  `;

  *_planIterator() {
    let index = -1;

    while(true) {

      if (index === this._plan.length - 1) {
        yield this._plan[index = 0];
      }

      yield this._plan[index += 1];
    }
  }

  _getChores(planItem) {
    return planItem.chores.map((chore) => html`
          <div class="activity">${chore.activity}</div>
          <div class="person">${chore.person}</div>
        `);
  }

  _getSchedule() {
    const planIterator = this._planIterator();
    const planDays = differenceInDays(this._endDate, this._startDate);
    const schedule = Array.from({ length: planDays }, (_, index) => ({ ...planIterator.next().value, date: addDays(this._startDate, index) }))
    .filter((planItem) => isAfter(planItem.date, this._today) || isToday(planItem.date));
  
    return html`${schedule.map((planItem) => html`<div class="plan">
        <div class="date">${format(planItem.date, "EEEE d 'de' MMMM", { locale: es })}</div>
        <div class="chores">
          ${this._getChores(planItem)}
        </div>
      </div>`)}`;    
  }

  render() {
    return html`${this._getSchedule()}`;
  }
}

customElements.define('share-chores', ShareChores);