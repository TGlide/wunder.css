function toggleBtn(selector, isLikeBtn) {
  const textClass = isLikeBtn ? "text-success" : "text-danger";
  const dataAttribute = isLikeBtn ? "like" : "dislike";

  const clickedPrev = $(selector).data("clicked");
  const dataPrev = $(selector).data(dataAttribute);

  if (!clickedPrev) {
    $(selector).data("clicked", true);
    $(selector).data(dataAttribute, dataPrev + 1);
    $(selector).removeClass("text-muted");
    $(selector).addClass(textClass);
    $(selector)
      .next()
      .text(dataPrev + 1);
  } else {
    $(selector).data("clicked", false);
    $(selector).data(dataAttribute, dataPrev - 1);
    $(selector).addClass("text-muted");
    $(selector).removeClass(textClass);
    $(selector)
      .next()
      .text(dataPrev - 1);
  }
}

$(document).ready(function () {
  $(".like-btn").click(function (e) {
    e.stopPropagation();
    toggleBtn(this, true);

    const dislikeBtn = $($(this).siblings(".dislike-btn")[0]);
    if (dislikeBtn.data("clicked")) {
      $(toggleBtn(dislikeBtn, false));
    }
  });

  $(".dislike-btn").click(function (e) {
    e.stopPropagation();
    toggleBtn(this, false);

    const likeBtn = $($(this).siblings(".like-btn")[0]);
    if (likeBtn.data("clicked")) {
      $(toggleBtn(likeBtn, true));
    }
  });
});
