import React, { Fragment, Component } from "react";
import { Waypoint } from "react-waypoint";
import MUIDataTable from "mui-datatables";

class Tweets extends Component {
  constructor(props) {
    super(props);
    this.props = props;

    this.state = {
      tweetList: []
    };
  }

  componentDidMount() {
    this.getTweets(0);
  }

  getTweets(pageNum) {
    const url = serverHost + '/get/tweets/' + this.id 
    console.log( '/page/', pageNum)

    fetch(url)
        .then((res) => res.json())
        .then((json) => {
            this.setState({
                tweetList: json
            });
        });
  }

columns = [
    {
      name: "",
      options: {
        filter: false,
        customBodyRender: (value, tableMeta, updateValue) => {
          const tweet = (<Tweet tweetId={value.id} key={value.id}/>)
          const rowIndex = tableMeta.rowIndex;
          const { tweetList, page } = this.state;

          if (rowIndex === tweetList.length - 4) {
            return (
              <Fragment>
                <Waypoint
                  onEnter={() => {
                    const newData = getTweets(page + 1);
                    this.setState({
                      tweetList: [...tweetList, ...newData],
                      page: page + 1
                    });
                  }}
                />
                {tweet}*
              </Fragment>
            );
          } else {
            return <Fragment>{tweet}</Fragment>;
          }
        }
      }
    }
  ];

  options = { };

  render() {
    const { tweetList, page } = this.state;
    return (
      <Grid container
            spacing={2}
            sx={{ justifyContent: 'space-between', flexWrap: 'wrap' }}
            key="noticias">
        <MUIDataTable
            data={tweetList}
            columns={this.columns}
            options={this.options}
          />
      </Grid>
    );
  }
}

export default Tweets;