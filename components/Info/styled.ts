import "@fontsource/inter";

import styled from "@emotion/styled";
import theme from "../theme";

export const Style = styled.div`
  nav {
    display: flex;
    align-items: center;
    background-color: ${theme.palette.primary.main};
    height: 90px;
    padding: 30px 25px;
  }

  .center {
    display: flex;
    justify-content: center;
  }

  .background {
    width: 550px;
    height: 870px;
    background-color: #23252c;
    display: flex;
    justify-content: center;
  }

  .card {
    height: 781px;
    width: 317px;
    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: column;
  }

  .info {
    display: flex;
    flex-direction: column;
  }

  .name {
    font-weight: 700;
    font-family: Inter, sans-serif;
    text-align: center;
    color: white;
    font-size: 25px;
  }

  .title {
    color: #f3bf99;
    font-size: 12.8px;
    text-align: center;
    font-family: Inter, sans-serif;
  }

  .email {
    width: 247px;
    height: 34px;
    background-color: white;
    background-image: url(/Icon.png);
    background-repeat: no-repeat;
    background-position: 35% center;
    background-size: auto;
    text-align: center;
    display: flex;
    align-items: center;
    justify-content: center;
    font-family: Inter;
    font-weight: 500;
    font-size: 14px;
    margin: 0;
  }

  .text {
    display: flex;
    flex-direction: column;
  }

  .about {
    font-family: Inter;
    font-style: normal;
    font-weight: bold;
    font-size: 16px;
    color: #f5f5f5;
    margin: 0;
    margin-top: 32px;
  }

  .about-text {
    font-family: Inter;
    font-size: 10.24px;
    color: #dcdcdc;
    max-width: 247px;
  }

  .interest {
    font-family: Inter;
    font-style: normal;
    font-weight: bold;
    font-size: 16px;
    color: #f5f5f5;
    margin: 0;
  }

  .interest-text {
    font-family: Inter;
    font-style: normal;
    font-weight: normal;
    font-size: 10.24px;
    max-width: 247px;
    color: #dcdcdc;
  }

  .footer > ul {
    display: flex;
    list-style-type: none;
    margin: 0 auto;
    align-items: center;
    height: auto;
  }

  .footer {
    height: 64px;
    background-color: ${theme.palette.secondary.main};
    display: flex;
    width: 100%;
  }

  li {
    padding-right: 20px;
  }
`;
export default Style;
