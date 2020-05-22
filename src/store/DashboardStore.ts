import { action, observable } from 'mobx';
import { Activity, DashboardStoreImpl, Timeline, TimelineHistory } from '../../@types';

class DashboardStore implements DashboardStoreImpl {
  @observable timeline: Timeline = {
    activity: [],
    history: [],
  };

  @action
  appendActivity = (activity: ConcatArray<Activity>) => {
    Object.assign(this.timeline, {
      activity: this.timeline.activity.concat(activity),
    });
  };

  @action
  appendHistory = (history: ConcatArray<TimelineHistory>) => {
    Object.assign(this.timeline, {
      history: this.timeline.history.concat(history),
    });
  };
}

export default new DashboardStore();
