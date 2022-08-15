import React from "react";
import styled from "styled-components";
import Logotube from "../img/youtube.png";
import HomeRoundedIcon from "@mui/icons-material/HomeRounded";
import ExploreOutlinedIcon from "@mui/icons-material/ExploreOutlined";
import SubscriptionsOutlinedIcon from "@mui/icons-material/SubscriptionsOutlined";
import VideoLibraryOutlinedIcon from "@mui/icons-material/VideoLibraryOutlined";
import HistoryOutlinedIcon from "@mui/icons-material/HistoryOutlined";
import LibraryMusicOutlinedIcon from "@mui/icons-material/LibraryMusicOutlined";
import SportsEsportsOutlinedIcon from "@mui/icons-material/SportsEsportsOutlined";
import SportsBasketballOutlinedIcon from "@mui/icons-material/SportsBasketballOutlined";
import MovieOutlinedIcon from "@mui/icons-material/MovieOutlined";
import ArticleOutlinedIcon from "@mui/icons-material/ArticleOutlined";
import LiveTvOutlinedIcon from "@mui/icons-material/LiveTvOutlined";
import AccountCircleOutlinedIcon from "@mui/icons-material/AccountCircleOutlined";
import SettingsOutlinedIcon from "@mui/icons-material/SettingsOutlined";
import FlagOutlinedIcon from "@mui/icons-material/FlagOutlined";
import HelpOutlineOutlinedIcon from "@mui/icons-material/HelpOutlineOutlined";
import SettingsBrightnessOutlinedIcon from "@mui/icons-material/SettingsBrightnessOutlined";

const Container = styled.div`
  flex: 1.5;
  color: whitesmoke;
  font-size: 14px;
  background-color: #202020;
  position: sticky;
  height: 100%;
  width: 100%;
`;
const Wrapper = styled.div`
  padding: 18px 26px;
`;
const Item = styled.div`
  display: flex;
  align-items: center;
  gap: 20px;
  cursor: pointer;
  padding: 7.5px 0px;
  &:hover {
    background-color: ${({ theme }) => theme.soft};
  }
`;
const Hr = styled.hr`
  margin: 15px 0px;
  border: 0.5px solid ${({ theme }) => theme.soft};
`;
const Login = styled.div``;
const Button = styled.div`
  padding: 5px 15px;
  background-color: transparent;
  border: 1px solid #3ea6ff;
  color: #3ea6ff;
  border-radius: 3px;
  font-weight: 500;
  margin-top: 10px;
  cursor: pointer;
`;

const Logo = styled.div`
  display: flex;
  align-items: center;
  gap: 5px;
  font-weight: bold;
  margin-bottom: 7px;
`;

const Title = styled.h2`
  font-size: 14px;
  font-weight: 500;
  color: #aaaaaa;
  margin-bottom: 20px;
`;
const Img = styled.img`
  height: 25px;
`;

const Menu = () => {
  return (
    <Container>
      <Wrapper>
        <Logo>
          <Img src={Logotube} />
          Demo
        </Logo>
        <Item>
          <HomeRoundedIcon />
          首頁
        </Item>
        <Item>
          <ExploreOutlinedIcon />
          探索
        </Item>
        <Item>
          <SubscriptionsOutlinedIcon />
          訂閱內容
        </Item>
        <Hr />
        <Item>
          <VideoLibraryOutlinedIcon />
          媒體庫
        </Item>
        <Item>
          <HistoryOutlinedIcon />
          觀看紀錄
        </Item>
        <Hr />
        <Login>
          Login
          <Button>登入</Button>
        </Login>
        <Hr />
        <Title>BEST OF LAMATUBE</Title>
        <Item>
          <LibraryMusicOutlinedIcon />
          音樂
        </Item>
        <Item>
          <SportsBasketballOutlinedIcon />
          體育
        </Item>
        <Item>
          <SportsEsportsOutlinedIcon />
          遊戲
        </Item>
        <Item>
          <MovieOutlinedIcon />
          電影
        </Item>
        <Item>
          <ArticleOutlinedIcon />
          新聞
        </Item>
        <Item>
          <LiveTvOutlinedIcon />
          直播
        </Item>
        <Hr />
        <Item>
          <SettingsOutlinedIcon />
          設定
        </Item>
        <Item>
          <FlagOutlinedIcon />
          檢舉紀錄
        </Item>
        <Item>
          <HelpOutlineOutlinedIcon />
          幫助
        </Item>
        <Item>
          <SettingsBrightnessOutlinedIcon />
          明亮模式
        </Item>
      </Wrapper>
    </Container>
  );
};

export default Menu;
