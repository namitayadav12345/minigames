import styled from 'styled-components'

export const BgContainerLarge = styled.div`
  height: 1024px;
  width: 1440px
  gradient: linear-gradient(to bottom, 117.3deg, #834d9b 2.24%, #d04ed6 173.83%);
  display: flex;
  flex-direction: column;
`

export const MainHeading = styled.h1`
  width: 151px;
  height: 56px;
  top: 96px;
  left: 644px;
  font-family: Roboto;
  font-size: 48px;
  font-weight: 700;
  line-height: 56px;
  letter-spacing: 0px;
  text-align: center;
  background: #f8fafc;
  @media screen and (max-width: 768px) {
    width: 312px;
    height: 176px;
  }
`
export const GameCard = styled.div`
  width: 554px;
  height: 280px;
  margin: 5px;
  border-radius: 12px;
  background-color: #ffffff;
  display: flex;
  flex-direction: column;
  align-items: center;
  @media screen and (max-width: 768px) {
    width: 312px;
    height: 176px;
  }
`
export const GameImage = styled.img`
  width: 224px;
  height: 232px;
`
