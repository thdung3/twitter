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
  hashTags: [],
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
  hashTags: [],
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
    hashTags: countHashTag(document.getElementById("tweetArea").value),
    retweets: 0,
    retweeted: false,
    likes: 0,
    liked: false,
    removed: false,
  };
  tweetList.unshift(tweet);
  document.getElementById("tweetArea").value = ""
  MAX_CHAR = 140
  document.getElementById("remainArea").innerHTML = MAX_CHAR;
  render(tweetList);
};


const render = (list) => {
  console.log('list:', list)
  let html = ''
  list.map(item => {
    html += `<div class="row pb-3 ">
      <div class="col-sm-2 list-area">
          <div class="list-user-icon">
              <img src="${item.pic}">
          </div>
      </div>
      <div class="col-sm-10 tweetbox-message-content">
          <div>
          ${item.user}<a href="#"> @${item.handle}</a>
          </div>
          <br>
          <div>
          ${renderHashTag(item.contents)}`
    if (item.hasRetweet) {
      // find index of parent tweet to show Retweet
      let index = 0
      for (let i = 0; i < list.length; i++) {
        if (list[i].id == item.parentTweetID) {
          index = i;
          break;
        }
      }
      html += `<div class="retweet">
                  <div class="retweet-icon">
                      <img src="${list[index].pic}"> ${list[index].user}<a href="#"> @${list[index].handle}</a>
                  </div>
                  ${renderHashTag(list[index].contents)}
              </div>`
    }
    html +=
      `</div>
              <div class="list-toolbar-icon">`
    // Render like icon and count the like 
    if (item.liked == true) {
      html += `<button id="btn-like" type="button" class="btn btn-link"><i id="ico-like" class="far fa-star change-like-color" onclick="doLike(${item.id})"></i>${item.likes}</button>`
    } else {
      html += `<button id="btn-like" type="button" class="btn btn-link"><i id="ico-like" class="far fa-star" onclick="doLike(${item.id})"></i>${item.likes}</button>`
    }
    html += `
              <button type="button" class="btn btn-link"><i class="far fa-comment" onclick="renderCommentModal(${item.id})">${item.comments}</i></button>
              <button type="button" class="btn btn-link"><i class="fas fa-retweet" onclick="renderModal(${item.id})">${item.retweets}</i></button>
              <button type="button" class="btn btn-link"><i class="fas fa-upload"></i></button>
              <button type="button" class="btn btn-link"><i class="far fa-trash-alt"
                      onclick="remove(${item.id})"></i></button>
          </div>`

    // Render comments
    if (item.hasComment) {
      for (let i = item.contentComment.length - 1; i >= 0; i--) {
        html += `
        <div class="comment row mt-2">
                            <div class="col-sm-2">
                                <img src="${item.contentComment[i].pic}"></div>
                            <div class="col-sm-10">
                                <a href="#"> @${item.contentComment[i].handle}</a>
                                <p>${renderHashTag(item.contentComment[i].comment)}</p>
                            </div>
                        </div>
      `
      }
    }
    html += `</div>
  </div>`
  })
  document.getElementById('tweetListArea').innerHTML = html
  MAX_CHAR = 140;
}

const renderHashTag = (content) => {
  console.log('*---- renderHashTag ----*')
  let html = ''
  for (let i = 0; i < content.length; i++) {
    if ((content[i]) == '#') {
      html += `<a href="#" onclick="searchHashTag(findHashTag('${content.substring(i, content.length)}'))">`
      html += content[i]
      for (j = i + 1; j < content.length; j++) {
        if (content[j] == ' ' || content[j] == '#' || content[j] == '@') {
          html += '</a>'
          i = j - 1
          break
        }
        html += content[j]
      }
      if (j == content.length) {
        i = j - 1
        html += '</a>'
      }
    } else if (content[i] == '@') {
      html += '<a href="#">'
      html += content[i]
      for (j = i + 1; j < content.length; j++) {
        if (content[j] == ' ' || content[j] == '#' || content[j] == '@') {
          html += '</a>'
          i = j - 1
          break
        }
        html += content[j]
      }
      if (j == content.length) {
        i = j - 1
        html += '</a>'
      }

    } else {
      html += content[i]
    }
  }
  return html
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
                                            src="/img/ja.jpg"
                                            alt="" style="width:50px; height:50px">
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
                                            src="/img/ja.jpg"
                                            alt="" style="width:50px;height:50px">
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
  document.getElementById('btn-modal-area').innerHTML = `
  <input class="col-sm-12" id="btn-tweet-modal" type="submit" value="Tweet"
    data-dismiss="modal" onclick="tweetFromModal()">
  `
  $('#status-modal').modal('hide')
}

const remove = (tweetId) => {
  let index = 0;
  for (let i = 0; i < tweetList.length; i++) {
    if (tweetList[i].id == tweetId)
      index = i
  }
  tweetList.splice(index, 1)
  render(tweetList)
}

const doLike = (tweetId) => {
  tweetList.filter(item => {
    if (item.id === tweetId) {
      if (item.liked) {
        item.liked = false
        item.likes--
      } else {
        item.likes++
        item.liked = true
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
    user: 'jamesdean',
    pic: '/img/ja.jpg',
    handle: 'dreamforever',
    contents: document.getElementById("tweetAreaModal").value,
    hasRetweet: false,
    isDirectRT: false,
    parentTweetID: "",
    comments: 0,
    hasComment: false,
    contentComment: [],
    hashTags: countHashTag(document.getElementById("tweetAreaModal").value),
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
    tweet.hasRetweet = true
    if (tweet.parentTweetID == "") { tweet.parentTweetID = tweetId }
  }
  tweetList.unshift(tweet);
  document.getElementById("tweetAreaModal").value = ""
  renderButtonTweet()
  render(tweetList);
};

const commentFromModal = (tweetId) => {
  console.log('*--- commentFromModal ---*')
  tweetList.filter(item => {
    if (item.id == tweetId) {
      item.hasComment = true
      item.comments++
      item.contentComment.push(
        {
          id: item.contentComment.length,
          comment: document.getElementById("commentAreaModal").value,
          // user: item.user,
          // handle: item.handle,
          // pic: item.pic
          user: 'jamesdean',
          pic: '/img/ja.jpg',
          handle: 'dreamforever'
        }
      )
    }
  })
  document.getElementById("commentAreaModal").value = ""
  render(tweetList);
}

const countHashTag = (content) => {
  let start = 0;
  let hashTag = []
  for (let i = 0; i < content.length; i++) {
    if (content[i] == '#') {
      start = i
      let wordLength = 1
      for (j = i + 1; j < content.length; j++) {
        if (content[j] == ' ' || content[j] == '#' || content[j] == '@') {
          i = j - 1
          break
        }
        wordLength++
      }
      if (j == content.length) {
        i = j - 1
      }
      if (wordLength > 1) { hashTag.push(content.substr(start, wordLength)) }

    }
  }
  return hashTag
}

const findHashTag = (content) => {
  console.log('*---- findHashTag ----*')
  let start = 0;
  for (let i = 0; i < content.length; i++) {
    if (content[i] == '#') {
      start = i
      let wordLength = 1
      for (j = i + 1; j < content.length; j++) {
        if (content[j] == ' ' || content[j] == '#' || content[j] == '@') {
          i = j - 1
          break
        }
        wordLength++
      }
      return content.substr(start, wordLength)
    }
  }
  return ''
}

const searchHashTag = (keyWord) => {
  console.log('*---- searchHashTag ----*')
  console.log('keyWord:', keyWord)
  let tweetListFiltred = tweetList.filter(item =>
    item.hashTags.indexOf(keyWord) >= 0
  )
  console.log('tweetListFiltred:', tweetListFiltred)
  render(tweetListFiltred)
}

const searchKeyWord = (keyWord) => {
  console.log('*---- searchKeyWord ----*')
  console.log('keyWord:', keyWord)
  let tweetListFiltred = tweetList.filter(item => item.contents.includes(keyWord))
  console.log('tweetListFiltred:', tweetListFiltred)
  render(tweetListFiltred)
}

document.getElementById('txtSearch').addEventListener("keyup", function (event) {
  // Number 13 is the "Enter" key on the keyboard
  if (event.keyCode === 13) {
    // Cancel the default action, if needed
    event.preventDefault();
    // Trigger the button element with a click
    let keyWord = document.getElementById('txtSearch').value
    console.log('keyWord:', keyWord)
    if (keyWord > '') {
      searchKeyWord(keyWord)
    } else {
      render(tweetList)
    }
  }
});

const clickHome = () => {
  render(tweetList)
}

render(tweetList)
