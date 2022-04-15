import "./App.css";
import 'antd/dist/antd.min.css';
import { PageHeader, Layout, Input, Row, Card, Col } from "antd";
import { useState } from "react";
import Meta from "antd/lib/card/Meta";


function App() {
  const [searchResults, setSearchResults] = useState([
    {
      cover:
        "https://m.media-amazon.com/images/M/MV5BNmNhM2NjMTgtNmIyZC00ZmVjLTk4YWItZmZjNGY2NThiNDhkXkEyXkFqcGdeQXVyODU4MDU1NjU@._V1_.jpg",
      title: "Valorant",
    },
    {
      cover:
        "https://cdn1.epicgames.com/offer/9773aa1aa54f4f7b80e44bef04986cea/EGS_RocketLeague_PsyonixLLC_S2_1200x1600-d441926566683d7048e16ac9df53eb14",
      title: "Rocket League",
    },
    {
      cover:
        "https://cdna.artstation.com/p/assets/images/images/043/897/516/large/seed-seven-twodots-seedseven-eldenring-1.jpg?1638544010",
      title: "Elden Ring",
    },
    {
      cover:
        "https://m.media-amazon.com/images/M/MV5BNmNhM2NjMTgtNmIyZC00ZmVjLTk4YWItZmZjNGY2NThiNDhkXkEyXkFqcGdeQXVyODU4MDU1NjU@._V1_.jpg",
      title: "Valorant",
    },
    {
      cover:
        "https://cdn1.epicgames.com/offer/9773aa1aa54f4f7b80e44bef04986cea/EGS_RocketLeague_PsyonixLLC_S2_1200x1600-d441926566683d7048e16ac9df53eb14",
      title: "Rocket League",
    },
    {
      cover:
        "https://cdna.artstation.com/p/assets/images/images/043/897/516/large/seed-seven-twodots-seedseven-eldenring-1.jpg?1638544010",
      title: "Elden Ring",
    },
    {
      cover:
        "https://m.media-amazon.com/images/M/MV5BNmNhM2NjMTgtNmIyZC00ZmVjLTk4YWItZmZjNGY2NThiNDhkXkEyXkFqcGdeQXVyODU4MDU1NjU@._V1_.jpg",
      title: "Valorant",
    },
    {
      cover:
        "https://cdn1.epicgames.com/offer/9773aa1aa54f4f7b80e44bef04986cea/EGS_RocketLeague_PsyonixLLC_S2_1200x1600-d441926566683d7048e16ac9df53eb14",
      title: "Rocket League",
    },
    {
      cover:
        "https://cdna.artstation.com/p/assets/images/images/043/897/516/large/seed-seven-twodots-seedseven-eldenring-1.jpg?1638544010",
      title: "Elden Ring",
    },
    {
      cover:
        "https://m.media-amazon.com/images/M/MV5BNmNhM2NjMTgtNmIyZC00ZmVjLTk4YWItZmZjNGY2NThiNDhkXkEyXkFqcGdeQXVyODU4MDU1NjU@._V1_.jpg",
      title: "Valorant",
    },
    {
      cover:
        "https://cdn1.epicgames.com/offer/9773aa1aa54f4f7b80e44bef04986cea/EGS_RocketLeague_PsyonixLLC_S2_1200x1600-d441926566683d7048e16ac9df53eb14",
      title: "Rocket League",
    },
    {
      cover:
        "https://cdna.artstation.com/p/assets/images/images/043/897/516/large/seed-seven-twodots-seedseven-eldenring-1.jpg?1638544010",
      title: "Elden Ring",
    },
  ]);

  return (
    <div className="App">
      <Layout>
        <PageHeader
          className="header"
          onBack={window.history.back()}
          title="Games"
        >
          <Row>
            <Input.Search
              className="search-input"
              placeholder="Search"
              // onSearch={handleSearch}
              allowClear
              enterButton="Search"
              style={{ width: 400 }}
            ></Input.Search>
          </Row>
        </PageHeader>
      </Layout>
      <Layout>
        <Row>
          {searchResults.map((item) => (
            <Col span={4}>
              <div>
                <Card hoverable cover={<img src={item.cover}></img>}>
                  <Meta  title={item.title} ></Meta>
                  {/* <img className="game-cover" src={item.cover}></img> */}
                </Card>
              </div>
            </Col>
          ))}
        </Row>
      </Layout>
    </div>
  );
}

export default App;
