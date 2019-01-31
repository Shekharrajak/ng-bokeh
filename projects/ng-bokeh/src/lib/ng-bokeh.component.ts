import { Component, OnInit } from '@angular/core';
import * as Bokehjs from 'bokehjs';

@Component({
  selector: 'bokeh-ng-bokeh',
  template: `
    <p>
      ng-bokeh works!
    </p>
  `,
  styles: []
})
export class NgBokehComponent implements OnInit {

  constructor() {
    console.log(plt2);
    const plt = Bokehjs.Plotting;
    const {Row} = Bokehjs;
    console.log(Row);
    console.log(plt);
    console.log(Bokehjs.Plotting);
    console.log(Bokehjs);
    console.log(`Bokehjs ${Bokehjs.version}`);

    // https://github.com/bokeh/bokeh/issues/658

    const x0 = ["2001-01-01T00:00:00Z", "2001-02-01T00:00:00Z", "2001-03-01T00:00:00Z", "2001-04-01T00:00:00Z", "2001-05-01T00:00:00Z"];
    const x1 = []; x0.forEach(function(entry) { x1.push(Date.parse(entry)) });

    console.log(x1);
    const y = [4, 5, 3, 5.5, 1];

    const  tools = "pan,crosshair,wheel_zoom,box_zoom,reset,save";

    let p = plt.figure({ title: "Title",height: 300,width: 300,tools: ''});
    p.attributes["above"][0]['align']='center';

  }

  ngOnInit() {
  }

}
