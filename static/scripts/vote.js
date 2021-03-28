function toggleBtn(selector, isLikeBtn) {
  const textClass = isLikeBtn ? "text-success" : "text-danger";
  const dataAttribute = isLikeBtn ? "like" : "dislike";

  const clickedPrev = $(selector).data("clicked");
  const dataPrev = $(selector).data(dataAttribute);
  const newDataValue = clickedPrev ? dataPrev - 1 : dataPrev + 1;

  $(selector).data("clicked", !clickedPrev);
  $(selector).data(dataAttribute, newDataValue);
  $(selector).toggleClass("text-muted");
  $(selector).toggleClass(textClass);
  $(selector).next().text(newDataValue);
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
