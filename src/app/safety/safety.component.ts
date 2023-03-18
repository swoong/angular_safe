import { Component } from '@angular/core';
import html2canvas from 'html2canvas';
import { formatDate } from '@angular/common';

@Component({
  selector: 'app-safety',
  templateUrl: './safety.component.html',
  styleUrls: ['./safety.component.css']
})
export class SafetyComponent {
  chk = true;

  items = [
    {
      "id": 1,
      "col1": "수장시공",
      "col2": "방진마스크 미착용으로 작업시 현장내 분진으로 호흡기 질환발생",
      "col3": "분진 발생이 예상되는 곳에서는 방진마스크 착용 철저"
    },
    {
      "id": 2,
      "col1": "수장시공",
      "col2": "보안경등 개인보호구 미착용하고 텍스 등 천정재 부착시 이물질이 눈에 들어가 안구손상",
      "col3": "분진 및 파편에 의한 안구 손상 방지를 위하여 작업시 보안경 착용"
    },
    {
      "id": 3,
      "col1": "수장시공",
      "col2": "석고보드 재단시 칼날과다 노출로 자상주의",
      "col3": "칼날 사용시 무리한 힘을 가하지 말고 안전장갑 착용"
    },
    {
      "id": 4,
      "col1": "수장시공",
      "col2": "소형절단기, 전기톱 등의 안전장치가 파손되어 신체 접촉, 협착",
      "col3": "절단기 전기톱 등에는 톱날접촉 방지장치용 덮개 설치"
    },
    {
      "id": 5,
      "col1": "자재 보관, 정리정돈",
      "col2": "안전모 등 개인보호구 미착용 하고 작업중 부딪히거나 낙하",
      "col3": "자재 반입 운반시 안전모 등 개잉보호구 착용 철저"
    },
    {
      "id": 6,
      "col1": "수장시공",
      "col2": "에어 콤푸레샤의 구동부에 신체 접촉, 협착",
      "col3": "벨트 등에 신체가 접촉되지 않도록 안전커버 부착 확인"
    },
    {
      "id": 7,
      "col1": "수장시공",
      "col2": "이동이 빈번하여 가설전선 등이 렌탈리프트 바퀴에  깔려 감전위험 발생",
      "col3": "이동전선은 가급적 짧은 구간을 이동하여 작업하도록 지도 및 통제실시"
    },
    {
      "id": 8,
      "col1": "자재 보관, 정리정돈",
      "col2": "자재 반입, 운반시 지게차 등으로부터 충돌, 협착",
      "col3": "차량 진입시 유도자 배치하여 근로자 통제"
    },
    {
      "id": 9,
      "col1": "고소작업차(고소작업대)",
      "col2": "장비작업 반경내 접근으로 충돌 협착",
      "col3": "통로 구획 및 이동경로 확보 상승 리미트스위치 수시점검"
    },
    {
      "id": 10,
      "col1": "수장시공",
      "col2": "전동공구 사용시 감전위험",
      "col3": "컷팅기 그라인더 등의 전동공구는 누전차단기에서 인출 작업 전 컷팅기의 접지, 피복상태 확인"
    },
    {
      "id": 11,
      "col1": "수장시공",
      "col2": "타정총 또는 타카건 사용시 안전수칙 미준수하여 못에 찔림",
      "col3": "타정총 또는 타카건 사용시 신체부위로 향하지 말도록 주지시키고, 이동시에는 잠금 장치 실시"
    },
    {
      "id": 12,
      "col1": "수장시공",
      "col2": "타정총 사용 중   오발",
      "col3": "타정총 사용 전 안전교육 실시"
    },
    {
      "id": 13,
      "col1": "수장시공",
      "col2": "하부작업관련 상부에서 자재, 공구 낙하 위험",
      "col3": "하부 자재 및 공구이동관련 로프이용 달아 매기 조치"
    },
    {
      "id": 14,
      "col1": "고소작업차(고소작업대)",
      "col2": "현장 반입장비 점검 미흡에 따른 안전사고",
      "col3": "현장 작업투입 전 장비점검 철저로 누락되는 장비가 없도록 관리"
    },
    {
      "id": 15,
      "col1": "시스템비계 설치",
      "col2": "작업간 안전벨트 미착용으로 추락",
      "col3": "작업투입 전 개인보호구 착용 확인"
    },
    {
      "id": 16,
      "col1": "시스템비계 설치",
      "col2": "시스템비계 상부에서 직업중 적재하중을 초과하는 하중을 적재하여 붕괴",
      "col3": "시스템비계에 최대 적재하중을 초과하는 하중의 적재를 금지"
    },
    {
      "id": 17,
      "col1": "시스템비계 해체",
      "col2": "시스템비계 해체작업 중  작업순서 미준수로 근로자 추락",
      "col3": "시스템비계 해체작업 시 설치순서의 역순으로 안전하게 해체"
    },
    {
      "id": 18,
      "col1": "시스템비계 해체",
      "col2": "시스템비계 해체간 연결되어 있는 수직재를 확인 못하고 전달하다 자재 낙하",
      "col3": "일체식 및 연결식 육안으로 확인후 작업"
    },
    {
      "id": 19,
      "col1": "시스템비계 해체",
      "col2": "시스템비계 해체간 자재를 하부로 전달중 작업자가 인식을 못하여 자재와 충돌,협착",
      "col3": "자재 하부로 양중시 손을 내밀지 말고 눈으로 확인 가능한 위치까지 왔을때 전달"
    }
  ];

  imageUrls = [
    { 
      "url" : 'https://hpms.hdec.co.kr/HDeSP/Site/GI13/DA03/20230313175042001_%EC%BA%A1%EC%B2%98.PNG',
      "title" : "이미지1"
    },
    { 
      "url" : 'https://hpms.hdec.co.kr/HDeSP/Site/GI13/DA03/20230313175042002_%EC%BA%A1%EC%B2%982.PNG',
      "title" : "이미지2"
    },
    { 
      "url" : 'https://hpms.hdec.co.kr/HDeSP/Site/GI13/DA03/20230221193447001_%EC%A7%80%EC%83%81.PNG',
      "title" : "이미지3"
    },
  ];

  details: boolean[] = new Array(this.items.length).fill(true);
  chkAll: boolean = false;
  isChecked: boolean = false;

  isArrow: boolean = false; //사용안함

  ngOnInit() {
    // 오름차순 정렬 방법
    const sorted = this.items.sort((a,b) => a.col1.toLowerCase().localeCompare(b.col1.toLowerCase()))      
    var i=0;
    for(i = 1; i < this.items.length; i++){
      console.log(this.details[i]);   
    }  

  }

   // 숨김(H)클릭시 해당 항목 화면 삭제
  on_check(i:any) {
    console.log(this.details[i]);
    if(i==='all'){
      for(i = 0; i < this.items.length; i++){
        this.details[i] = true;
      }  
    }
    else {
      this.details[i] = !this.details[i];
      this.chkAll = false;
    }  
  } 

  saveImage() {    

    //이미지 화살표 숨기기
    const button_hides = Array.from(document.querySelectorAll<HTMLInputElement>('button[name="b_hide"]'));
    for (const button_hide of button_hides) {
        button_hide.style.display = 'none'; 
    }


    // 숨김(H) 태그를 보이지 않게 함
    const span_hides = Array.from(document.querySelectorAll<HTMLInputElement>('span[name="s_hide"]'));
    for (const span_hide of span_hides) {
        span_hide.style.display = 'none'; 
    }
    
  
    const today = new Date();
    // 날짜 포맷을 설정 (예: 2022-03-14)
    const fileName = "TBM"+formatDate(today, 'yyyyMMdd', 'en-US')+".jpg";

    // div capture 내용을 이미지로 저장하는 로직
    const element = document.getElementById('capture') as HTMLElement;    
    html2canvas(element, { 
      scale: 1.5,     
      useCORS: true,
      allowTaint: true
    }).then(canvas => {
      canvas.toBlob(blob => {
        if (blob) { // null 예외처리
          const a = document.createElement('a');
          a.href = URL.createObjectURL(blob);
          a.download = fileName;
          a.click();          
        }  
      }, 'image/jpg');
    });

    // 숨김(H) 태그를 다시보이게 함
    for (const span_hide of span_hides) {
      span_hide.style.display = ''; 
    }

    //이미지 화살표 다시보이게
    for (const button_hide of button_hides) {
        button_hide.style.display = ''; 
    }

  }
}


