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
import { Link } from "react-router-dom";

const Container = styled.div`
  flex: 1;
  background-color: ${({ theme }) => theme.bgLight};
  transition: 500ms;
  color: ${({ theme }) => theme.text};
  font-size: 14px;
  position: sticky;
  height: 100vh;
  top: 0px;
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
  margin: 5px 0px 5px 0px;
  border: 0.5px solid ${({ theme }) => theme.soft};
`;
const Login = styled.div``;
const Button = styled.button`
  padding: 5px 15px;
  background-color: transparent;
  border: 1px solid #3ea6ff;
  color: #3ea6ff;
  border-radius: 3px;
  font-weight: 500;
  margin-top: 10px;
  cursor: pointer;
  display: flex;
  align-items: center;
  gap: 5px;
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

const Menu = ({ mode, setMode }) => {
  return (
    <Container>
      <Wrapper>
        <Link to="/" style={{ textDecoration: "none", color: "inherit" }}>
          <Logo>
            <Img src={Logotube} />
            Demo
          </Logo>
        </Link>
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
          註冊以收藏影片，回覆，訂閱
          <Link to="SignIn" style={{ textDecoration: "none" }}>
            <Button>
              <AccountCircleOutlinedIcon />
              登入
            </Button>
          </Link>
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
        <Item onClick={() => setMode(!mode)}>
          <SettingsBrightnessOutlinedIcon />
          切換主題
        </Item>
      </Wrapper>
    </Container>
  );
};

export default Menu;
