(function ($) {
  $.fn.loader = function (action = "load") {
    return this.each(function () {
      switch (action) {
        case "load":
          const styles = `
            .loader:before,
            .loader:after {
              border-radius: 50%;
              content: "";
              display: block;
              height: 20px;
              width: 20px;
            }
  
            .loader:before {
              animation: ball1 1s infinite;
              background-color: #3c6eb2;
              box-shadow: 30px 0 0 #3c6eb2;
              margin-bottom: 10px;
            }
  
            .loader:after {
              animation: ball2 1s infinite;
              background-color: #fff;
              box-shadow: 30px 0 0 #fff;
            }
  
            @keyframes rotate {
              0% {
                transform: rotate(0deg) scale(0.8);
              }
              50% {
                transform: rotate(360deg) scale(1.2);
              }
              100% {
                transform: rotate(720deg) scale(0.8);
              }
            }
  
            @keyframes ball1 {
              0% {
                box-shadow: 30px 0 0 #15b4af;
              }
              50% {
                box-shadow: 0 0 0 #15b4af;
                margin-bottom: 0;
                transform: translate(15px, 15px);
              }
              100% {
                box-shadow: 30px 0 0 #15b4af;
                margin-bottom: 10px;
              }
            }
  
            @keyframes ball2 {
              0% {
                box-shadow: 30px 0 0 #dcd918;
              }
              50% {
                box-shadow: 0 0 0 #dcd918;
                margin-top: -20px;
                transform: translate(15px, 15px);
              }
              100% {
                box-shadow: 30px 0 0 #dcd918;
                margin-top: 0;
              }
            }
          `;

          if (!document.getElementById("loader-styles")) {
            const styleSheet = document.createElement("style");
            styleSheet.type = "text/css";
            styleSheet.id = "loader-styles";
            styleSheet.innerText = styles;
            document.head.appendChild(styleSheet);
          }

          let divLoader = document.createElement("div");
          let loader = document.createElement("span");

          divLoader.className = "divLoader";
          loader.className = "loader";

          $(divLoader).css({
            position: "absolute",
            top: "0",
            left: "0",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            width: "100%",
            height: "100%",
            background: "#00000038",
            cursor: "wait",
          });

          $(loader).css({
            animation: "rotate 1s infinite",
            height: "50px",
            width: "50px",
          });

          $(divLoader).append(loader);

          $(this).css("position", "relative").append(divLoader);
          break;

        case "unload":
          $(this)
            .find(".divLoader")
            .fadeOut(function () {
              $(this).remove();
            });

          break;

        default:
          console.error("Informe uma ação válida!");
      }
    });
  };
})(jQuery);
