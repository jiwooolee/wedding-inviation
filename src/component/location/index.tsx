import { Map } from "./map"
import CarIcon from "../../icons/car-icon.svg?react"
import BusIcon from "../../icons/bus-icon.svg?react"
import SubwayIcon from "../../icons/subway-icon.svg?react"
import ParkingIcon from "../../icons/parking-icon.svg?react"
import { LazyDiv } from "../lazyDiv"
import { LOCATION, LOCATION_ADDRESS } from "../../const"

export const Location = () => {
  return (
    <>
      <LazyDiv className="card location">
        <h2 className="english">Location</h2>
        <div className="addr">
          {LOCATION}
          <div className="detail">{LOCATION_ADDRESS}</div>
        </div>
        <Map />
      </LazyDiv>
      <LazyDiv className="card location">
        <div className="location-info">
          <div className="transportation-icon-wrapper">
            <SubwayIcon className="transportation-icon"/>
          </div>
          <div className="heading">지하철</div>
          <div />
          <div className="content">
            <p style={{margin: 0}}>■ 1호선&7호선 가산디지털단지역</p>
            5번 출구 나와서 약 20M 직진후 셔틀버스 탑승
            <br />
            <br />
            <p style={{margin: 0}}>■ 2호선 구로디지털단지역</p>
            4번 출구 나와서 약 100M 직진후 셔틀버스 탑승
            <br/>
            <br/>
            셔틀버스는 15분 간격으로 순환 운행됩니다
          </div>
        </div>
        <div className="location-info">
          <div className="transportation-icon-wrapper">
            <BusIcon className="transportation-icon" />
          </div>
          <div className="heading">버스</div>
          <div />
          <div className="content">
            <p style={{margin: 0}}>■ 디지털로 버스이용하는 경우 - 지선 : 5536, 5615</p>
            G밸리보건지소, G하이시티, 에이스하이엔드에서 하차 / 한화비즈메카 사이 도로로 약 200m
            <br />
            <br />
            <p style={{margin: 0}}>■ 남부순환로의 버스이용하는 경우 - 간선 : 504, 643, 651 / 지선 5528, 5615, 5619, 5626</p>
            지타워 건물 뒤편에서 진입하게 됨 - 정성요양병원별관을 끼고 우회전하여 골목길로 진입하여
            지타워건물 뒤편 3층 도착 - 에스컬레이터 이용하여 2층으로 이동
            <br />
            <br />
            <p style={{margin: 0}}>■ 마을버스 : 금천07 이용</p>
            구로디지털역방향 - 지타워 , G밸리산업박물관(지타워)
            에이스하이엔드타워2차방향 - 에이스하이엔드타워2차, G밸리산업박물관(지타워), 대륭8차
          </div>
        </div>
        <div className="location-info">
          <div className="transportation-icon-wrapper">
            <CarIcon className="transportation-icon" />
          </div>
          <div className="heading">자가용</div>
          <div />
          <div className="content">
            <p style={{margin: 0}}>네비게이션 검색 : 서울시 구로구 디지털로 26길 38
              ( #구로지타워 , #지타워몰 , #지타워컨벤션, #넷마블신사옥 )</p>
            <p>디지털로26길 도로 이용하여 지타워 진입 - Gate 1, Gate 2 만 진입가능</p>
          </div>
          <div />
        </div>
        <div className="location-info">
          <div className="transportation-icon-wrapper">
            <ParkingIcon className="transportation-icon" />
          </div>
          <div className="heading">주차</div>
          <div />
          <div className="content">
            <p style={{margin: 0}}>단독주차 / 1400대 주차 가능</p>
            <p>2시간 무료주차 (이후 10분당 700원)</p>
          </div>
          <div />
        </div>
      </LazyDiv>
    </>
  )
}
