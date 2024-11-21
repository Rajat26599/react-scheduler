import React from 'react';
import './App.css';
import { Inject, ScheduleComponent, Day, EventSettingsModel, TimelineMonth, ViewDirective, ViewsDirective, 
  HeaderRowsDirective, HeaderRowDirective, CellTemplateArgs, getWeekNumber, TimelineViews, getStartEndHours } from '@syncfusion/ej2-react-schedule';
import { data } from './data';

class App extends React.Component {
  private localData: EventSettingsModel = {
    dataSource: [{
      EndTime: new Date(2024, 10, 18, 6, 30),
      StartTime: new Date(2024, 10, 18, 4, 0)
    }, ...data.layers[0].layers, ...data.layers[1].layers]
  }
  public weekTemplate(data: any): JSX.Element {
    return (
      <span>{this.getWeekDetails(data)}</span>
    )
  }
  private getWeekDetails(value: CellTemplateArgs): string {
    return 'Week ' + getWeekNumber((value as CellTemplateArgs).date);
  }
  public render() {
    return (
      <ScheduleComponent 
        id='schedule-component'
        currentView='Month'
        eventSettings={this.localData}
        selectedDate={new Date(2022, 9, 1)}
        >
          <HeaderRowsDirective>
            <HeaderRowDirective option='Week' template={this.weekTemplate.bind(this)}></HeaderRowDirective>
            <HeaderRowDirective option='Date'></HeaderRowDirective>
            <HeaderRowDirective option='Hour'></HeaderRowDirective>
          </HeaderRowsDirective>
          <ViewsDirective>
            <ViewDirective option='Day' displayName='1 Day'></ViewDirective>
            <ViewDirective option='Day' interval={2} displayName='2 Day'></ViewDirective>
            <ViewDirective option='TimelineWeek' displayName='1 Week'></ViewDirective>
            <ViewDirective option='TimelineWeek' interval={2} displayName='2 Week'></ViewDirective>
            <ViewDirective option='TimelineMonth' displayName='1 Month'></ViewDirective>
          </ViewsDirective>
        <Inject services={[Day, TimelineViews, TimelineMonth]} />
      </ScheduleComponent>
    );
  }
}

export default App;
