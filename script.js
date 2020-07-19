let tweetArea = document.getElementById("tweetArea");
let num = 1;
let tweetList = [{
  id: 1,
  user: "blondebombshell",
  pic: "/img/ma2.jpg",
  handle: "marilyn_monroe",
  contents: "Give a girl the right pair of shoes and she'll conquer the world.",
  hasRetweet: false,
  isDirectRT: false,
  parentTweetID: "",
  comments: 0,
  hasComment: false,
  contentComment: [],
  retweets: 260,
  retweeted: false,
  likes: 5,
  liked: false,
  postTime: new Date(2020, 4, 24, 23, 05, 30),
}, {
  id: 0,
  user: "fatherofcomedy",
  pic: "/img/cha.jpg",
  handle: "charlie_chaplin",
  contents: "Life is a tragedy when seen in close-up, but a comedy in long-shot.",
  hasRetweet: false,
  isDirectRT: false,
  parentTweetID: "",
  comments: 0,
  hasComment: false,
  contentComment: [],
  retweets: 258,
  retweeted: false,
  likes: 153,
  liked: false,
  postTime: new Date(2020, 4, 22, 22, 33, 30),
},];

//----------------------------------------------------Bitna
let MAX_CHAR = 140;
let tweetContents = document.getElementById("tweetArea");
const countLetter = () => {
  //1. know how many letter inside of textarea
  let numOfText = tweetContents.value.length;
  //2. remain = Max_char - 1.
  let remain = MAX_CHAR - numOfText;
  //2-1. if remain is negative number, change text to red
  if (remain < 0) {
    document.getElementById("remainArea").style.color = "red";
  } else {
    document.getElementById("remainArea").style.color = "black";
  }
  //3. show remian text
  document.getElementById("remainArea").innerHTML = remain;
};
tweetContents.addEventListener("input", countLetter);
//---------------------------------------------------------Bitna

//init
// document.getElementById("uploadButton").disabled = true;
document.getElementById("uploadButton").innerText = "Story Fire";


const tweetFire = () => {
  console.log('*----- tweetFire -----*')
  console.log('Tweet content:', document.getElementById("tweetArea").value)
  num++;
  let tweet = {
    id: num,
    user: 'jamesdean',
    pic: '/img/ja.jpg',
    handle: 'dreamforever',
    contents: document.getElementById("tweetArea").value,
    hasRetweet: false,
    isDirectRT: false,
    parentTweetID: "",
    comments: 0,
    hasComment: false,
    contentComment: [],
    retweets: 0,
    retweeted: false,
    likes: 0,
    liked: false,
    removed: false,
  };
  console.log('tweet:', tweet)
  tweetList.unshift(tweet);
  document.getElementById("tweetArea").value = ""
  MAX_CHAR = 140
  document.getElementById("remainArea").innerHTML = MAX_CHAR;
  render(tweetList);
};


const render = (list) => {
  let html = list.map(item => {
    return `<div class="row pb-3 ">
      <div class="col-sm-2 list-area">
          <div class="list-user-icon">
              <img src="/img/ma.jpg">
          </div>
      </div>
      <div class="col-sm-10 tweetbox-message-content">
          <div>
          ${item.user}<a href="#"> @${item.handle}</a>
          </div>
          <br>
          <div>
          ${item.contents}
              <div class="retweet">
                  <div class="retweet-icon">
                      <img src="${item.pic}"> artsyworld<a href="#"> @manolo_blahnik</a>
                  </div>
                  ${item.contents}
              </div>
          </div>
          <div class="list-toolbar-icon">
              <button type="button" class="btn btn-link"><i class="far fa-star">${item.likes}</i></button>
              <button type="button" class="btn btn-link"><i class="far fa-comment">${item.comments}</i></button>
              <button type="button" class="btn btn-link"><i class="fas fa-retweet">${item.retweets}</i></button>
              <button type="button" class="btn btn-link"><i class="fas fa-upload"></i></button>
              <button type="button" class="btn btn-link"><i class="far fa-trash-alt"
                      onclick="remove(${item.id})"></i></button>
          </div>
      </div>

  </div>`

    //     return `<div class="row pb-3 ">
    //     <div class="col-sm-2 list-area">
    //     <div class="list-user-icon">
    //         <img src="${item.pic}">
    //     </div>
    //     </div>
    //     <div class="col-sm-10 tweetbox-message-content">
    //         <div>
    //         ${item.user}<a href="#"> @${item.handle}</a>
    //         </div>
    //         <br>
    //             <div>
    //         ${item.contents}
    //             </div>
    //             <div class="list-toolbar-icon">
    //                 <button type="button" class="btn btn-link"><i class="far fa-star">${item.likes}</i></button>
    //                 <button type="button" class="btn btn-link"><i class="far fa-comment">${item.comments}</i></button>
    //               <button type="button" class="btn btn-link"><i class="fas fa-retweet">${item.retweets}</i></button>
    //             <button type="button" class="btn btn-link"><i class="fas fa-upload"></i></button>
    //             <button type="button" class="btn btn-link"><i class="far fa-trash-alt" onclick="remove(${item.id})></i></button>
    //           </div>
    //       </div>
    //     </div>
    // </div>`
  }).join('')
  document.getElementById('tweetListArea').innerHTML = html
  MAX_CHAR = 140;
}

const renderModal = (tweetId) => {
  document.getElementById('modal-area').innerHTML = `
  <div class="modal fade" id="status-modal" tabindex="-1" role="dialog" aria-labelledby="exampleModalLabel"
                aria-hidden="true">
                <div class="modal-dialog" role="document">
                    <div class="modal-content">
                        <div class="modal-container">
                            <div class="modal-header">
                                <h5 class="modal-title" id="exampleModalLabel"></h5>
                                <button type="button" class="close" data-dismiss="modal" aria-label="Close">
                                    <span aria-hidden="true">&times;</span>
                                </button>
                            </div>
                            <div class="modal-body">
                                <div class=row>
                                    <div class="col-sm-2 p-0">
                                        <img class="rounded-circle w-100"
                                            src="https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcSErLkGTgw9909gKLGRTxEhNI7XkLbWbnmmsg&usqp=CAU"
                                            alt="" style="width:50px;">
                                    </div>
                                    <div class="col-sm-10">
                                        <textarea id="tweetAreaModal" cols="45" rows="4"
                                            placeholder="What's your story?" style=" border:none; "></textarea>
                                    </div>
                                </div>
                            </div>
                            <div class="modal-footer">
                                <div class="col-sm-4 icon-modal-area">
                                    <i class="far fa-image"></i>
                                    <i class="fas fa-poll"></i>
                                    <i class="far fa-kiss-wink-heart"></i>
                                    <i class="far fa-calendar-alt"></i>
                                </div>
                                <div class="col-sm-3"></div>
                                <div class="col-sm-4" id="btn-modal-area">
                                    <input class="col-sm-12 btn-modal" id="btn-tweet-modal" type="submit" value="Tweet"
                                        data-dismiss="modal" onclick="tweetFromModal(${tweetId})">
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
  `
  $('#status-modal').modal()
}

const renderCommentModal = (tweetId) => {
  document.getElementById('modal-area-comment').innerHTML = `
  <div class="modal fade" id="comment-modal" tabindex="-1" role="dialog" aria-labelledby="exampleModalLabel"
                aria-hidden="true">
                <div class="modal-dialog" role="document">
                    <div class="modal-content">
                        <div class="modal-container">
                            <div class="modal-header">
                                <h5 class="modal-title" id="exampleModalLabel"></h5>
                                <button type="button" class="close" data-dismiss="modal" aria-label="Close">
                                    <span aria-hidden="true">&times;</span>
                                </button>
                            </div>
                            <div class="modal-body">
                                <div class=row>
                                    <div class="col-sm-2 p-0">
                                        <img class="rounded-circle w-100"
                                            src="https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcSErLkGTgw9909gKLGRTxEhNI7XkLbWbnmmsg&usqp=CAU"
                                            alt="" style="width:50px;">
                                    </div>
                                    <div class="col-sm-10">
                                        <textarea id="commentAreaModal" cols="45" rows="4"
                                            placeholder="What's your story?" style=" border:none; "></textarea>
                                    </div>
                                </div>
                            </div>
                            <div class="modal-footer">
                                <div class="col-sm-4 icon-modal-area">
                                    <i class="far fa-image"></i>
                                    <i class="fas fa-poll"></i>
                                    <i class="far fa-kiss-wink-heart"></i>
                                    <i class="far fa-calendar-alt"></i>
                                </div>
                                <div class="col-sm-3"></div>
                                <div class="col-sm-4" id="btn-comment-modal-area">
                                    <input class="col-sm-12 btn-modal" id="btn-comment-modal" type="submit" value="Comment"
                                        data-dismiss="modal" onclick="commentFromModal(${tweetId})">
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
  `
  $('#comment-modal').modal()
}

const renderButtonTweet = () => {
  console.log('*---- renderButtonTweet ----*')
  document.getElementById('btn-modal-area').innerHTML = `
  <input class="col-sm-12" id="btn-tweet-modal" type="submit" value="Tweet"
    data-dismiss="modal" onclick="tweetFromModal()">
  `
  $('#status-modal').modal('hide')
}

const remove = (tweetId) => {
  console.log('tweetId:', tweetId)
  let index = 0;
  for (let i = 0; i < tweetList.length; i++) {
    if (tweetList[i].id == tweetId)
      index = i
  }
  console.log('index;', index)
  tweetList.splice(index, 1)
  // console.log(tweetList)
  render(tweetList)
}

const doLike = (tweetId) => {
  console.log('*---- doLike ----*')
  tweetList.filter(item => {
    if (item.id === tweetId) {
      console.log('item.id:', item.id)
      if (item.liked) {
        item.liked = false
        item.likes--
        // document.getElementById('btn-like').classList.remove('change-like-color')
      } else {
        item.likes++
        item.liked = true
        // document.getElementById('btn-like').classList.add('change-like-color')
      }
    }
  })
  render(tweetList);
}

const tweetFromModal = (tweetId) => {
  console.log('*----- tweetFromModal -----*')
  num++;
  let tweet = {
    id: num,
    user: 'jeesunlee',
    pic: 'hy.jpg',
    handle: 'luckymeday',
    contents: document.getElementById("tweetAreaModal").value,
    hasRetweet: false,
    isDirectRT: false,
    parentTweetID: "",
    comments: 0,
    hasComment: false,
    contentComment: [],
    retweets: 0,
    retweeted: false,
    likes: 0,
    liked: false,
    removed: false,
  };
  if (isNaN(tweetId)) {
    // Tweet

  } else {
    // Retweet
    tweet.retweeted = true
    tweet.retweets++
    if (tweet.parentTweetID = "") { tweet.parentTweetID = tweetId }
  }
  tweetList.unshift(tweet);
  document.getElementById("tweetAreaModal").value = ""
  renderButtonTweet()
  render(tweetList);
};

const commentFromModal = (tweetId) => {
  console.log('*--- commentFromModal ---*')
  console.log('tweetId:', tweetId)
  tweetList.filter(item => {
    if (item.id == tweetId) {
      item.hasComment = true
      item.comments++
      item.contentComment.push(
        {
          id: item.contentComment.length,
          comment: document.getElementById("commentAreaModal").value
        }
      )
    }
  })
  document.getElementById("commentAreaModal").value = ""
  render(tweetList);
  console.log('tweetList:', tweetList)
}
