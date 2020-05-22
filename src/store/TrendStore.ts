import { action, observable } from 'mobx';
import { Trend, TrendStoreImpl } from '../../@types';

class TrendStore implements TrendStoreImpl {
  @observable trends: Trend[] = [];

  @action
  appendTrend = (trend: Trend | Trend[]) => {
    if (Array.isArray(trend)) this.trends.push(...trend);
    else this.trends.push(trend);
  };
}

export default new TrendStore();
