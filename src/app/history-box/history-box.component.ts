import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-history-box',
  templateUrl: './history-box.component.html',
  styleUrls: ['./history-box.component.scss']
})
export class HistoryBoxComponent implements OnInit {

  results = history.state.data
  p1Total = history.state.points1Total
  p2Total = history.state.points2Total
  pDTotal = history.state.pointsDrawTotal

  ngOnInit() {
    console.log('res', history.state.data)
  }

}
