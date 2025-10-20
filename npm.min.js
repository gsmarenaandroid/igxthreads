let sukses = 0;
let nulled = 0;
let gagal = 0;
let counter = 0;
let not_sms_code = 0;
let onurls;
let linkshimed;
let tempmail;
let temp_user;
let id_number;
let temp_pass;
let client_email;
let is_checkuid;
let checkuid_email_state;
let client_uid_v2;
let is_otp_number;
let gambar_ig;
let onshort;
let node_id;
let guid_id;
let deviceidLog_id;
let challenge_context_id;
let i_want_user;
let uidid;
let capctha_from;
let commit_comment;
let scheme_friendship;
let koneksion;
let dismiessed;
let aborted;
let onsetuid;
let serialize;
let u_link;
let per;
let ioa;
let lowe;
let ire;
let thread_linkid = '';
const chance = new Chance();
$("span.showdeletepost").hide();
const user_htcx_active = document.cookie.match("(^|;)\\s*user_htcx\\s*=\\s*([^;]+)")?.["pop"]();
const accounts_ig = document.cookie.match("(^|;)\\s*login_ig\\s*=\\s*([^;]+)")?.["pop"]();
const accounts_trheads = document.cookie.match("(^|;)\\s*login_threads\\s*=\\s*([^;]+)")?.["pop"]();
const otp_code = document.cookie.match("(^|;)\\s*otp\\s*=\\s*([^;]+)")?.["pop"]();
const hash = window.location.hash;
$("span.htcxuser").text(user_htcx_active);
$("button.buildbranchlinkwebsite").attr("disabled", true);
$("button.buildpostlinkThreads").attr("disabled", true);
$("button.editwebsitelink").attr("disabled", true);
$("button.createlinkstory").attr("disabled", true);
if (hash) {
  $(".nav-link[data-target=\"" + hash + "\"]").tab("show");
  if (hash == "#threads") {
    profile_threads();
    capctha_from = "threads";
    openBindThreads();
    if (!accounts_ig) {
      $("button.metu").hide();
      $("button.add_new_account").hide();
      $(".consolelog").text("AKUN IG TIDAK ADA");
    } else {
      $(".consolelog").text("Reload Untuk Load Ig Account");
    }
  } else {
    ig_account_profile();
    capctha_from = "instagram";
    openBindIg();
    if (!accounts_trheads) {
      $(".threads_env").text("AKUN THREADS TIDAK ADA");
      $("button.metuThreads").hide();
      $("button.import_account").show();
    } else {
      $("button.import_account").hide();
      $("button.metuThreads").show();
      $(".threads_env").text("Reload Untuk Load Threads Account");
    }
  }
} else {
  $(".nav-link[data-target=\"#instagram\"]").tab("show");
}
if (otp_code !== undefined) {
  $("button.get_otp").attr("disabled", false);
  $("button.get_otp").attr("title", "Klik Untuk Mendapatkan Nomer Otp !");
} else {
  $("button.get_otp").attr("disabled", true);
  $("button.get_otp").attr("title", "Tambah Otp Api Untuk Mengaktifkan Ini !");
}
$(document).on("shown.bs.tab", "button[data-toggle=\"tab\"]", function (_0x39a5a2) {
  let _0x23ccbf = $(_0x39a5a2.target).attr("data-target");
  if (_0x23ccbf == "#threads" || _0x23ccbf == "#instagram") {
    if (history.pushState) {
      history.pushState(null, null, _0x23ccbf);
    } else {
      location.hash = _0x23ccbf;
    }
  }
});
if (localStorage.getItem("KeyLive") === null) {
  $(".fa-circle").css("color", "red");
  $(".fa-circle").attr("title", "Global Branch OFF");
} else {
  $(".fa-circle").css("color", "green");
  $(".fa-circle").attr("title", "Global Branch ON");
}
if (localStorage.getItem("userState") !== null) {
  $(".state_username").text(localStorage.getItem("userState"));
}
if (localStorage.getItem("userStateThreads") !== null) {
  $(".state_username_threads").text(localStorage.getItem("userStateThreads"));
}
document.querySelector(".changepict").addEventListener("change", readFile);
function readFile() {
  if (!this.files || !this.files[0]) {
    return;
  }
  const _0x371983 = new FileReader();
  _0x371983.addEventListener("load", function (_0x43e11e) {
    document.querySelector(".img_preview").src = _0x43e11e.target.result;
    document.querySelector("p.base64").textContent = _0x43e11e.target.result;
  });
  _0x371983.readAsDataURL(this.files[0]);
}
document.querySelector(".uploadid").addEventListener("change", upload_poto);
function upload_poto() {
  if (!this.files || !this.files[0]) {
    return;
  }
  const _0x2c5a01 = new FileReader();
  _0x2c5a01.addEventListener("load", function (_0x19c10b) {
    document.querySelector(".imgupload").src = _0x19c10b.target.result;
    document.querySelector("p.uploadbase64").textContent = _0x19c10b.target.result;
  });
  _0x2c5a01.readAsDataURL(this.files[0]);
}
document.querySelector(".storyids").addEventListener("change", story_poto);
function story_poto() {
  if (!this.files || !this.files[0]) {
    return;
  }
  const _0x52e998 = new FileReader();
  _0x52e998.addEventListener("load", function (_0x53c2fb) {
    document.querySelector(".imgstory").src = _0x53c2fb.target.result;
    document.querySelector("p.uploadstorybase64").textContent = _0x53c2fb.target.result;
  });
  _0x52e998.readAsDataURL(this.files[0]);
}
document.querySelector(".uploadThreadsPost").addEventListener("change", upload_poto_threads);
function upload_poto_threads() {
  if (!this.files || !this.files[0]) {
    return;
  }
  const _0x4d268d = new FileReader();
  _0x4d268d.addEventListener("load", function (_0x5d0259) {
    document.querySelector(".imguploadThreads").src = _0x5d0259.target.result;
    document.querySelector("p.uploadbaseThreads64").textContent = _0x5d0259.target.result;
  });
  _0x4d268d.readAsDataURL(this.files[0]);
}
document.querySelector(".gantiprofileThreadss").addEventListener("change", gantiprofileThreadss);
function gantiprofileThreadss() {
  if (!this.files || !this.files[0]) {
    return;
  }
  const _0xb6370e = new FileReader();
  _0xb6370e.addEventListener("load", function (_0x4d997a) {
    document.querySelector(".gambarmetu").src = _0x4d997a.target.result;
    document.querySelector("p.base64profileimage").textContent = _0x4d997a.target.result;
  });
  _0xb6370e.readAsDataURL(this.files[0]);
}
function checking(_0x2938d8) {
  return !isNaN(_0x2938d8);
}
$(document).on("change", "input.uploadmultiimage", function () {
  var _0x1f943a = 0;
  for (var _0x1ab09a = this.files.length; _0x1f943a < _0x1ab09a; _0x1f943a++) {
    (function (_0x161788, _0x1c94b7) {
      var _0x148ab8 = new FileReader();
      _0x148ab8.onload = function (_0x188457) {
        const _0x360333 = "<div class=\"input-group-prepend\">\n\t\t\t\t\t\t\t\t\t\t<span class=\"input-group-text\">\n\t\t\t\t\t\t\t\t\t\t\t<img src=\"" + _0x188457.target.result + "\" width=\"300\" height=\"300\" class=\"img-thumbnail multiimageupload\">\n\t\t\t\t\t\t\t\t\t\t</span>\n                    <textarea class=\"form-control p-3 multithreadcaption\" placeholder=\"Caption Upload\"></textarea>\n\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t";
        $(".multiimage").append(_0x360333);
      };
      _0x148ab8.readAsDataURL(_0x1c94b7.files[_0x161788]);
    })(_0x1f943a, this);
  }
});
function openBindThreads() {
  if (localStorage.getItem("autobind") !== null) {
    const _0x5181b4 = localStorage.getItem("autobind");
    if (_0x5181b4.match(/(instagram)/)) {
      const _0x1fdd88 = _0x5181b4.replace("instagram", "threads");
      $("textarea.idusergenThreads").sendkeys(_0x1fdd88);
    } else {
      $("textarea.idusergenThreads").sendkeys(_0x5181b4);
    }
    $("select.ThreadsTools").attr("disabled", false);
    $("select.ThreadsUidTools").attr("disabled", false);
    $("input.delayedthreads").attr("disabled", false);
    $("textarea.biograpfy_threads").attr("disabled", false);
    $("textarea.uidthreadsids").attr("disabled", false);
    $("textarea.commitThreads").attr("disabled", false);
    $("button.buildbranchlinkwebsite").attr("disabled", false);
    $("button.buildpostlinkThreads").attr("disabled", false);
  }
}
function openBindIg() {
  if (localStorage.getItem("autobind") !== null) {
    const _0xb36801 = localStorage.getItem("autobind");
    if (_0xb36801.match(/(threads)/)) {
      const _0xd7c9ff = _0xb36801.replace("threads", "instagram");
      $("textarea.idusergen").sendkeys(_0xd7c9ff);
    } else {
      $("textarea.idusergen").sendkeys(_0xb36801);
    }
    $("select.igtools").attr("disabled", false);
    $("select.uidgrab").attr("disabled", false);
    $("input.delayed").attr("disabled", false);
    $("input.canonical").attr("disabled", false);
    $("input.customimage").attr("disabled", false);
    $("input.email_add").attr("disabled", false);
    $("input.newmail").attr("disabled", false);
    $("input.newphonenumber").attr("disabled", false);
    $("input.current_password").attr("disabled", false);
    $("input.new_password").attr("disabled", false);
    $("textarea.biograpfy").attr("disabled", false);
    $("textarea.uid").attr("disabled", false);
    $("textarea.commit").attr("disabled", false);
    $("button.editwebsitelink").attr("disabled", false);
    $("button.createlinkstory").attr("disabled", false);
  }
}
$(document).on("change", ".base64Branch", function () {
  let _0x572b60 = $(this).get(0).files;
  let _0x4aad51 = chance.pickone(["17c61ac34f0b1c263c2032fc6fd7540e", "78d3d40e22a78116bfac77a6ed3636be", "d648d2be9d07acb01f780501db4a02ed", "56151fa1baf88bdd98efbad156c2cf64", "62522a2dc48d60725b445818a1c3d924"]);
  settings = {
    'url': "https://api.imgbb.com/1/upload?key=" + _0x4aad51,
    'type': "POST",
    'async': false,
    'crossDomain': true,
    'processData': false,
    'contentType': false,
    'headers': {
      'Accept': "application/json"
    },
    'mimeType': "multipart/form-data"
  };
  if (_0x572b60.length) {
    if (_0x572b60[0].size > $(this).data("max-size") * 1024) {
      alert("Pilih Ukuran Seng Cilick");
      return false;
    }
    var _0x21b22b = new FormData();
    _0x21b22b.append("image", _0x572b60[0]);
    settings.data = _0x21b22b;
    $.ajax(settings).done(_0xb63737 => {
      img_url = JSON.parse(_0xb63737);
      display = img_url.data.url;
      $("input.customimage").sendkeys(display);
      $(".consolelog").text("Upload Sukses");
    }).fail(() => {
      $(".consolelog").text("Upload Gagal");
    });
  }
});
$(document).on("input", "textarea.idusergen", function () {
  const _0x180bac = $(this).val();
  const _0x277738 = ["b-lovely", "beamlove", "checkuid", "igmom", "igrock", "instagmag", "mymomig", "newhtc", "parket", "sciencenumber", "sitfor", "sheebony"];
  if (_0x277738.some(_0x241e3f => _0x180bac.includes(_0x241e3f))) {
    if (localStorage.getItem("autobind") === null) {
      localStorage.setItem("autobind", _0x180bac);
    }
    $("select.igtools").attr("disabled", false);
    $("select.uidgrab").attr("disabled", false);
    $("input.delayed").attr("disabled", false);
    $("input.canonical").attr("disabled", false);
    $("input.customimage").attr("disabled", false);
    $("textarea.biograpfy").attr("disabled", false);
    $("textarea.uid").attr("disabled", false);
    $("textarea.commit").attr("disabled", false);
    $("button.editwebsitelink").attr("disabled", false);
    $("button.createlinkstory").attr("disabled", false);
  } else {
    alert("Informasi Salah Input Terkirim.");
    $("textarea.idusergen").val('');
    return false;
  }
});
$(document).on("input", "textarea.uid", function () {
  const _0x3b0cb3 = $(this).val().split("\n");
  const _0x4f2385 = _0x3b0cb3.length;
  $(".jumlah").text(_0x4f2385);
});
$(document).on("input", "textarea.commit, textarea.commitThreads", function () {
  const _0x4caab1 = $(this).val().split("\n");
  if ($(this).val().match(/(key_live_|key_test_)/)) {
    if (localStorage.getItem("KeyLive") === null) {
      if (confirm("SETTING KEY LIVE / KEY TEST SEBAGAI GLOBAL TAB ?")) {
        localStorage.setItem("KeyLive", JSON.stringify(_0x4caab1));
        location.reload();
      }
    }
  } else {
    if ($(this).val().match(/(workers.dev|dmstory.link)/)) {
      if (localStorage.getItem("KeyLive") === null) {
        if (confirm("Setting Turtles sebagai Global config ?")) {
          localStorage.setItem("KeyLive", JSON.stringify(_0x4caab1));
          location.reload();
        }
      }
    } else {
      const _0x37a40f = _0x4caab1.length;
      $("span.misc").text(_0x37a40f);
    }
  }
});
function ig_account_profile() {
  $.ajax({
    'url': "/profile",
    'type': "get",
    'beforeSend': function () {
      $(".consolelog").html("<span class=\"spinner-border spinner-border-sm\"></span> Please Waiting Fetch Profile");
    },
    'headers': {
      'content-type': "application/x-www-form-urlencoded"
    }
  }).done(async _0x3af8ea => {
    if (_0x3af8ea.login) {
      $(".consolelog").html("<span class=\"spinner-border spinner-border-sm\"></span> " + _0x3af8ea.login);
      setTimeout(() => {
        location.reload();
      }, 5000);
    }
    let _0x5ac587 = _0x3af8ea.sukses.username;
    let _0x51be27 = _0x3af8ea.sukses.profile_pic_url;
    let _0x50be55 = _0x3af8ea.sukses.full_name;
    let _0x86b372 = _0x3af8ea.sukses.biography;
    let _0x23f72a = _0x3af8ea.sukses.fbid_v2;
    let _0x5a27ac = _0x3af8ea.sukses.follower_count;
    let _0x21efe4 = _0x3af8ea.sukses.following_count;
    let _0x30078c = _0x3af8ea.sukses.media_count;
    let _0x38f027 = _0x3af8ea.sukses.pk;
    let _0x48d3b1 = _0x3af8ea.baseimage;
    gambar_ig = _0x51be27;
    if (_0x3af8ea.sukses.bio_links.length !== 0) {
      const _0x404da1 = _0x3af8ea.sukses.bio_links[0].url || '';
      const _0x3d3af9 = _0x3af8ea.sukses.bio_links[0].lynx_url || '';
      linkshimed = _0x3d3af9;
      if (_0x404da1.indexOf("https://") > -1) {
        onurls = _0x404da1.replace("https://", '');
      } else {
        onurls = '';
      }
      link_active = _0x3af8ea.sukses.bio_links[0].link_id;
      u_link = link_active;
    } else {
      u_link = '';
    }
    per = _0x50be55;
    ioa = _0x5ac587;
    lowe = _0x86b372;
    ire = onurls;
    $(".uidUser").text(_0x38f027);
    $(".fb_v2_uid").text(_0x23f72a);
    $(".imagelow").attr("src", _0x48d3b1);
    $(".img_preview").attr("src", _0x48d3b1);
    $(".inusername").text(_0x5ac587);
    $(".posting").text(_0x30078c);
    $(".followers").text(_0x5a27ac);
    $(".following").text(_0x21efe4);
    $(".realname").text(_0x50be55);
    $(".quote").text(_0x86b372);
    $(".highlink").attr("href", linkshimed);
    $(".biolink").text(onurls);
    $(".img_url").text(_0x51be27);
    $(".consolelog").text("Sukses fetch instagram account.");
    if (_0x30078c !== 0) {
      $("span.showdeletepost").show();
    }
    if (localStorage.getItem("userState") === null) {
      localStorage.setItem("userState", _0x5ac587);
      $(".state_username").text(_0x5ac587);
    }
    const _0x1eac2a = ["dmstory.link", "app.link", "workers"];
    const _0xd3ea5d = $("textarea.idusergen").val();
    if (!onurls || _0x1eac2a.some(_0x13ce4c => onurls.includes(_0x13ce4c))) {
      return true;
    } else {
      if (!_0xd3ea5d || _0xd3ea5d < 1) {
        if (_0x1eac2a.some(_0x189cf3 => onurls.includes(_0x189cf3) || !onurls || onurls < 1)) {
          return true;
        } else {
          const _0x24110e = await delete_auto_linked(u_link);
          const _0x55b95e = _0x24110e.sukses;
          $(".consolelog").text(_0x55b95e);
        }
      }
    }
  }).fail(async _0x460280 => {
    const _0x103e5c = JSON.parse(_0x460280.responseText);
    $("button.metuThreads").hide();
    $("button.import_account").hide();
    if (_0x103e5c.mailcode) {
      dismiessed = false;
      $(".consolelog").text(_0x103e5c.mailcode);
      $(".codemail").click();
    } else {
      if (_0x103e5c.htc_x) {
        $(".consolelog").text(_0x103e5c.htc_x);
      } else {
        if (_0x103e5c.error.challenge.url.indexOf("challenge") > -1) {
          dismis(capctha_from);
        } else {
          if (_0x103e5c.error.challenge.url.indexOf("suspended") > -1) {
            $(".consolelog").text("akun suspend");
          } else if (_0x103e5c.error.challenge.url.indexOf("disabled") > -1) {
            $(".consolelog").text("akun disabled");
          } else {
            $(".consolelog").text(_0x103e5c.error.message);
          }
        }
      }
    }
  });
}
function credentials() {
  $.ajax({
    'url': "/credentials",
    'type': "get",
    'beforeSend': function () {
      $("input.ikiemail, input.phone_number_profile").attr("placeholder", "process fetch wait...");
    },
    'headers': {
      'content-type': "application/x-www-form-urlencoded"
    }
  }).done(_0x42368d => {
    if (!_0x42368d.sukses.phone_number) {
      $("input.phone_number_profile").attr("placeholder", "Phone Number");
    }
    if (!_0x42368d.sukses.email) {
      $("input.ikiemail").attr("placeholder", "Email");
    }
    $("input.ikiemail").val(_0x42368d.sukses.email);
    $("input.phone_number_profile").val(_0x42368d.sukses.phone_number);
  }).fail(_0x3f6546 => {
    const _0x19ec68 = JSON.parse(_0x3f6546.responseText);
    $("button.metuThreads").hide();
    $("button.import_account").hide();
    if (_0x19ec68.mailcode) {
      dismiessed = false;
      $(".consolelog").text(_0x19ec68.mailcode);
      $(".codemail").click();
    } else {
      if (_0x19ec68.htc_x) {
        $(".consolelog").text(_0x19ec68.htc_x);
      } else {
        if (_0x19ec68.error.challenge.url.indexOf("challenge") > -1) {
          dismis(capctha_from);
        } else {
          if (_0x19ec68.error.challenge.url.indexOf("suspended") > -1) {
            $(".consolelog").text("akun suspend");
          } else if (_0x19ec68.error.challenge.url.indexOf("disabled") > -1) {
            $(".consolelog").text("akun disabled");
          } else {
            $(".consolelog").text(_0x19ec68.error.message);
          }
        }
      }
    }
  });
}
function profile_threads() {
  $.ajax({
    'url': "/profile_threads",
    'type': "get",
    'beforeSend': function () {
      $(".threads_env").html("<span class=\"spinner-border spinner-border-sm\"></span> Please Waiting Fetch Profile");
    }
  }).done(async _0x4927d5 => {
    if (_0x4927d5.no_account) {
      $("button.metuThreads").hide();
      $("button.import_account").show();
      $("div.showbuttonThreads").hide();
      $("img.imgThreads").css("pointer-events", "none");
      $(".threads_env").text(_0x4927d5.no_account);
    } else {
      if (_0x4927d5.htc_x.status == 'ok') {
        let _0x5ac409 = _0x4927d5.baseimage;
        let _0x3f1359 = _0x4927d5.htc_x.user.pk;
        let _0x4fa6d4 = _0x4927d5.htc_x.user.full_name;
        let _0x5e51fa = _0x4927d5.htc_x.user.username;
        let _0x35be32 = _0x4927d5.htc_x.user.biography;
        let _0x2a30a0 = _0x4927d5.htc_x.user.follower_count;
        let _0x42839b = _0x4927d5.htc_x.user.following_count;
        let _0x7e7d0b = _0x4927d5.onpost;
        fbid_v2 = _0x4927d5.htc_x.user.fbid_v2;
        if (_0x4927d5.htc_x.user.bio_links.length !== 0) {
          thread_linkid = _0x4927d5.htc_x.user.bio_links[0].link_id;
          link_bio = _0x4927d5.htc_x.user.bio_links[0].url;
          lynx_uri = _0x4927d5.htc_x.user.bio_links[0].lynx_url;
          link_title = _0x4927d5.htc_x.user.bio_links[0].title;
          removeHTTP = link_bio.replace("https://", '');
          titleLink = link_title;
        } else {
          link_bio = '';
          lynx_uri = '';
          link_title = '';
          removeHTTP = '';
        }
        $("button.metuThreads").show();
        $("div.showbuttonThreads").show();
        $("button.import_account").hide();
        $(".imgThreads").attr("src", _0x5ac409);
        $(".gambarmetu").attr("src", _0x5ac409);
        $(".uid_thread").text(_0x3f1359);
        $(".fullnameThreads").text(_0x4fa6d4);
        $(".usernameThreads").text(_0x5e51fa);
        $(".quotesThreads").text(_0x35be32);
        $(".followersThreads").text(_0x2a30a0);
        $(".followingthreads").text(_0x42839b);
        $(".postthreads").val(_0x7e7d0b);
        $(".pointerThreads").attr("href", lynx_uri);
        $(".bioLinkThreads").text(removeHTTP);
        $("input.full_name_threads").val(_0x4fa6d4);
        $("input.usernameprofile_threads").val(_0x5e51fa);
        $("textarea.biograpfy_threads").val(_0x35be32);
        $("input.websiteLinkthreads").val(link_bio);
        $(".threads_env").text("Sukses Fetch Threads Account.");
        $("span.state_username_threads").text(_0x5e51fa);
        if (localStorage.getItem("userStateThreads") === null) {
          localStorage.setItem("userStateThreads", _0x5e51fa);
        }
        if (_0x7e7d0b === 0) {
          const _0x147bbf = localStorage.getItem("autobind");
          const _0x2bb675 = localStorage.getItem("shortUrl");
          if (_0x147bbf !== null) {
            if (_0x2bb675 !== null) {
              $(".threads_env").html("<span class=\"spinner-border spinner-border-sm\"></span> Start Auto Post");
              const _0x387be1 = $("textarea.idusergenThreads").val();
              const _0x141bec = await autopost(_0x387be1, _0x2bb675);
              $(".threads_env").text(_0x141bec.sukses);
            }
          }
        }
      }
    }
  }).fail(async _0xe6fe3 => {
    const _0x265046 = JSON.parse(_0xe6fe3.responseText);
    const _0x39e831 = _0x265046.htc_x.message;
    if (_0x39e831) {
      if (_0x39e831 == "login_required") {
        const _0x54a47f = _0x265046.htc_x.error_title;
        if (!accounts_ig) {
          $("button.import_account").hide();
        } else {
          $("button.import_account").show();
        }
        $("button.metuThreads").show();
        $(".threads_env").text(_0x54a47f);
      } else {
        if (_0x39e831 == "feedback_required") {
          const _0x40956b = _0x265046.htc_x.feedback_title;
          $("button.metuThreads").show();
          $("button.import_account").hide();
          $(".threads_env").text(_0x40956b);
        } else {
          if (_0x39e831 == "challenge_required") {
            const _0x3b7328 = _0x265046.htc_x.challenge.url;
            if (_0x3b7328.indexOf("suspended") > -1) {
              $(".threads_env").text("AKUN SUSPEND");
              return false;
            } else {
              dismis(capctha_from);
            }
          } else {
            const _0x56c407 = _0x265046.htc_x.require_login;
            if (_0x56c407 == true) {
              if (!accounts_ig) {
                $("button.import_account").hide();
              } else {
                $("button.import_account").show();
              }
              $("button.metuThreads").show();
              $(".threads_env").text("akun logout");
            } else {
              $(".threads_env").text(_0x39e831);
            }
          }
        }
      }
    } else {
      $(".threads_env").text("Error Tidak Diketahui");
    }
  });
}
function dismis(_0x3c5cdc) {
  $.ajax({
    'url': "/dismis",
    'type': "get",
    'beforeSend': function () {
      $(".consolelog").html("<span class=\"spinner-border spinner-border-sm\"></span> Please Waiting Flow challenge.");
    },
    'data': {
      'from': _0x3c5cdc
    }
  }).done(_0x41509d => {
    if (_0x41509d.mailcode) {
      dismiessed = true;
      $(".threads_env").text(_0x41509d.mailcode);
      $(".consolelog").text(_0x41509d.mailcode);
      $(".codemail").click();
    }
    if (_0x41509d.changePassword) {
      dismiessed = true;
      $(".threads_env").text(_0x41509d.changePassword);
      $(".consolelog").text(_0x41509d.changePassword);
      $(".sandianyar").click();
    }
    if (_0x41509d.submitphonenumber) {
      dismiessed = true;
      $(".threads_env").text(_0x41509d.submitphonenumber);
      $(".consolelog").text(_0x41509d.submitphonenumber);
      $(".phonenumber").click();
    }
    if (_0x41509d.sukses) {
      $(".threads_env").html("<span class=\"spinner-border spinner-border-sm\"></span> Sukses Bypass Dismis");
      $(".consolelog").html("<span class=\"spinner-border spinner-border-sm\"></span> Sukses Bypass Dismis");
      location.reload();
    }
  }).fail(_0x59b2e6 => {
    let _0x12e3ff = JSON.parse(_0x59b2e6.responseText);
    if (_0x12e3ff.errorLog) {
      $(".threads_env").text(_0x12e3ff.errorLog);
      $(".consolelog").text(_0x12e3ff.errorLog);
    } else {
      if (_0x12e3ff.capctha) {
        $.ajax({
          'url': "/captcha",
          'type': "get",
          'beforeSend': function () {
            $(".consolelog").html("<span class=\"spinner-border spinner-border-sm\"></span> Enteni Seg Bypass Captcha");
            $(".threads_env").html("<span class=\"spinner-border spinner-border-sm\"></span> Enteni Seg Bypass Captcha");
          },
          'data': {
            'from': capctha_from
          }
        }).done(_0xce2412 => {
          $(".threads_env").text("ByPass Captcha " + _0xce2412.sukses);
          $(".consolelog").text("ByPass Captcha " + _0xce2412.sukses);
          location.reload();
        }).fail(_0x4c4639 => {
          let _0x47b676 = JSON.parse(_0x4c4639.responseText);
          $(".consolelog").text(_0x47b676.error_captcha);
          $(".threads_env").text(_0x47b676.error_captcha);
        });
      } else {
        if (_0x12e3ff.sandi) {
          node_id = _0x12e3ff.kontex.challenge_node_id;
          guid_id = _0x12e3ff.kontex.guid;
          deviceidLog_id = _0x12e3ff.kontex.device_id;
          challenge_context_id = _0x12e3ff.kontex.challenge_context;
          $(".consolelog").text(_0x12e3ff.sandi);
          $(".threads_env").text(_0x12e3ff.sandi);
          $(".sandianyar").click();
        }
        $(".threads_env").text(_0x12e3ff.htc_x);
        $(".consolelog").text(_0x12e3ff.htc_x);
      }
    }
  });
}
async function from_htcx() {
  try {
    const _0x37761c = $("textarea.idusergen").val();
    const _0x18eada = encodeURIComponent(_0x37761c);
    const _0x4f85fd = chance.name({
      'middle': true
    }).replaceAll(" ", '');
    const _0x35d1e9 = "https://onehtc.com/api/logger/linked/?android=" + _0x18eada + "&alias=" + _0x4f85fd.toLowerCase();
    const _0x3ea6d4 = {
      'method': "GET",
      'headers': {
        'Accept': "*/*",
        'Content-Type': "application/x-www-form-urlencoded"
      }
    };
    const _0x53b4a3 = await fetch(_0x35d1e9, _0x3ea6d4);
    if (_0x53b4a3.ok) {
      return _0x53b4a3.json();
    } else {
      const _0x4bed20 = await _0x53b4a3.text();
      throw Error(_0x4bed20);
    }
  } catch (_0x1db716) {
    $(".consolelog").text(_0x1db716);
  }
}
async function buildLinksIgBio(_0x48d119) {
  const _0x33abbb = await from_htcx();
  const _0x1a64ee = _0x33abbb.url;
  $.ajax({
    'url': "/auto_linked",
    'type': "post",
    'data': {
      'linkid': _0x48d119,
      'link': _0x1a64ee
    }
  }).done(_0x30fb25 => {
    $(".consolelog").text(_0x30fb25.sukses);
  }).fail(_0xf1c28b => {
    let _0xedd796 = JSON.parse(_0xf1c28b.responseText);
    if (_0xedd796.htc_x) {
      $(".consolelog").text(_0xedd796.htc_x);
    } else {
      if (_0xedd796.error.challenge.url.indexOf("challenge") > -1) {
        $(".consolelog").text("Akun Captcha | Dismis | Change Password | Reload atau open new tab untuk solve !");
      } else {
        if (_0xedd796.error.challenge.url.indexOf("suspended") > -1) {
          $(".consolelog").text("akun suspend");
        } else if (_0xedd796.error.challenge.url.indexOf("disabled") > -1) {
          $(".consolelog").text("akun disabled");
        } else {
          $(".consolelog").text(_0xedd796.error.message);
        }
      }
    }
  });
}
async function delete_auto_linked(_0x1e68ff) {
  try {
    const _0x5373eb = {
      'linked_id': _0x1e68ff
    };
    const _0x1dbde7 = {
      'method': "POST",
      'headers': {
        'Accept': "*/*",
        'Content-Type': "application/x-www-form-urlencoded"
      },
      'body': new URLSearchParams(_0x5373eb)
    };
    const _0x4483cc = await fetch("/delete_linked", _0x1dbde7);
    if (_0x4483cc.ok) {
      return _0x4483cc.json();
    } else {
      const _0x5773c0 = await _0x4483cc.text();
      throw Error(_0x5773c0);
    }
  } catch (_0x5b7fbd) {
    $(".consolelog").text(_0x5b7fbd);
  }
}
$(document).on("change", "select.optionlink", function () {
  var _0x5106fa = $("option:selected", this);
  var _0x2b1606 = this.value;
  $("[class*='branchlink'], [class*='cloudlink']").removeClass(function (_0x534e33, _0x5e1dfc) {
    return (_0x5e1dfc.match(/branchlink|cloudlink/g) || []).join('');
  });
  if (_0x2b1606 == "branchlink") {
    _0x5106fa.addClass("branchlink");
  }
  if (_0x2b1606 == "cloudlink") {
    _0x5106fa.addClass("cloudlink");
  }
});
$(document).on("change", "select.igtools", function () {
  var _0x12f068 = $("option:selected", this);
  var _0x2d937a = this.value;
  $("[class*='sessionid'], [class*='follow'], [class*='likeuid'], [class*='commentuid'], [class*='dmpeople'], [class*='dm_story'], [class*='creategroup'], [class*='dmgroup'], [class*='send_dm'], [class*='clone'], [class*='approve'], [class*='adduser']").removeClass(function (_0x11fea9, _0xb8aeb9) {
    return (_0xb8aeb9.match(/sessionid|follow|likeuid|commentuid|dmpeople|dm_story|dmgroup|creategroup|send_dm|clone|approve|adduser/g) || []).join('');
  });
  if (_0x2d937a == "sessionid") {
    $(".kuki").show();
    $(".pred").hide();
    $(".chunkify").hide();
    $(".showSelect").hide();
    $(".uidType").hide();
    $(".profilesetting").hide();
    _0x12f068.addClass("sessionid");
  }
  if (_0x2d937a == "follow") {
    $(".kuki").hide();
    $(".pred").show();
    $(".chunkify").hide();
    $(".showSelect").hide();
    $(".uidType").hide();
    $(".profilesetting").hide();
    _0x12f068.addClass("follow");
  }
  if (_0x2d937a == "likeuid") {
    $(".kuki").hide();
    $(".pred").show();
    $(".chunkify").hide();
    $(".showSelect").hide();
    $(".uidType").hide();
    $(".profilesetting").hide();
    _0x12f068.addClass("likeuid");
  }
  if (_0x2d937a == "commentuid") {
    $(".kuki").hide();
    $(".pred").show();
    $(".chunkify").hide();
    $(".showSelect").hide();
    $(".uidType").hide();
    _0x12f068.addClass("commentuid");
  }
  if (_0x2d937a == "dmpeople") {
    $(".kuki").hide();
    $(".pred").show();
    $(".chunkify").hide();
    $(".uidType").hide();
    $(".profilesetting").hide();
    $(".showSelect").show();
    _0x12f068.addClass("dmpeople");
  }
  if (_0x2d937a == "dm_story") {
    $(".kuki").hide();
    $(".pred").show();
    $(".chunkify").hide();
    $(".uidType").hide();
    $(".profilesetting").hide();
    $(".showSelect").hide();
    _0x12f068.addClass("dm_story");
  }
  if (_0x2d937a == "dmgroup") {
    $(".kuki").hide();
    $(".pred").show();
    $(".chunkify").hide();
    $(".uidType").hide();
    $(".profilesetting").hide();
    $(".showSelect").show();
    _0x12f068.addClass("dmgroup");
  }
  if (_0x2d937a == "creategroup") {
    $(".kuki").hide();
    $(".pred").show();
    $(".chunkify").show();
    $(".uidType").hide();
    $(".profilesetting").hide();
    $(".showSelect").hide();
    _0x12f068.addClass("creategroup");
  }
  if (_0x2d937a == "send_dm") {
    $(".kuki").hide();
    $(".pred").show();
    $(".chunkify").hide();
    $(".uidType").hide();
    $(".profilesetting").hide();
    $(".showSelect").show();
    _0x12f068.addClass("send_dm");
  }
  if (_0x2d937a == "clone") {
    $(".kuki").hide();
    $(".pred").show();
    $(".chunkify").hide();
    $(".showSelect").hide();
    $(".uidType").hide();
    $(".profilesetting").show();
    _0x12f068.addClass("clone");
  }
  if (_0x2d937a == "approve") {
    $(".kuki").hide();
    $(".pred").show();
    $(".chunkify").hide();
    $(".showSelect").hide();
    $(".uidType").hide();
    _0x12f068.addClass("approve");
  }
  if (_0x2d937a == "adduser") {
    $(".kuki").hide();
    $(".pred").show();
    $(".chunkify").show();
    $(".showSelect").hide();
    $(".uidType").hide();
    _0x12f068.addClass("adduser");
  }
});
$(document).on("change", "select.uidgrab", function () {
  var _0x4bb1d8 = $("option:selected", this);
  var _0x19443a = this.value;
  $("[class*='massuid'], [class*='uidfollowers'], [class*='uidfollowing'], [class*='uidlike'], [class*='graphql'], [class*='threadid'], [class*='userpost'], [class*='check'], [class*='usernametouid']").removeClass(function (_0x465e5c, _0x13f6ce) {
    return (_0x13f6ce.match(/massuid|uidfollowers|uidfollowing|uidlike|graphql|threadid|userpost|check|usernametouid/g) || []).join('');
  });
  if (_0x19443a == "massuid") {
    $(".uidmassal").show();
    $(".uidType").show();
    $(".showSelect").hide();
    $(".chunkify").hide();
    $(".profilesetting").hide();
    _0x4bb1d8.addClass("massuid");
  }
  if (_0x19443a == "uidfollowers") {
    $(".uidmassal").hide();
    $(".uidType").show();
    $(".showSelect").hide();
    $(".chunkify").hide();
    $(".profilesetting").hide();
    _0x4bb1d8.addClass("uidfollowers");
  }
  if (_0x19443a == "uidfollowing") {
    $(".uidmassal").hide();
    $(".uidType").show();
    $(".showSelect").hide();
    $(".chunkify").hide();
    $(".profilesetting").hide();
    _0x4bb1d8.addClass("uidfollowing");
  }
  if (_0x19443a == "uidlike") {
    $(".uidmassal").hide();
    $(".uidType").show();
    $(".showSelect").hide();
    $(".chunkify").hide();
    $(".profilesetting").hide();
    _0x4bb1d8.addClass("uidlike");
  }
  if (_0x19443a == "graphql") {
    $(".uidmassal").hide();
    $(".uidType").show();
    $(".showSelect").hide();
    $(".chunkify").hide();
    $(".profilesetting").hide();
    _0x4bb1d8.addClass("graphql");
  }
  if (_0x19443a == "threadid") {
    $(".uidmassal").hide();
    $(".uidType").hide();
    $(".showSelect").hide();
    $(".chunkify").hide();
    $(".profilesetting").hide();
    _0x4bb1d8.addClass("threadid");
  }
  if (_0x19443a == "userpost") {
    $(".uidmassal").hide();
    $(".uidType").hide();
    $(".showSelect").hide();
    $(".chunkify").hide();
    $(".profilesetting").hide();
    _0x4bb1d8.addClass("userpost");
  }
  if (_0x19443a == "check") {
    $(".uidmassal").hide();
    $(".uidType").hide();
    $(".showSelect").hide();
    $(".chunkify").hide();
    $(".profilesetting").hide();
    _0x4bb1d8.addClass("check");
  }
  if (_0x19443a == "usernametouid") {
    $(".uidmassal").hide();
    $(".uidType").hide();
    $(".showSelect").hide();
    $(".chunkify").hide();
    $(".profilesetting").hide();
    _0x4bb1d8.addClass("usernametouid");
  }
});
$(document).on("click", "button.deleteallpost", function () {
  let _0x3364b5 = $("span.posting").text();
  let _0x33b035 = $("span.uidUser").text();
  if (_0x3364b5 == 0) {
    alert("Postingan 0 !");
    return false;
  }
  if (confirm("NJOK DELETE KABEH POST E TA ?")) {
    $.ajax({
      'url': "/deleteallpost",
      'type': "get",
      'beforeSend': function () {
        $(".consolelog").html("<span class=\"spinner-border spinner-border-sm\"></span> Enteni Seg Delete All Post");
      },
      'headers': {
        'content-type': "application/x-www-form-urlencoded"
      },
      'data': {
        'uid': _0x33b035
      }
    }).done(_0x4c6d9e => {
      if (_0x4c6d9e.sukses) {
        $(".consolelog").text(_0x4c6d9e.sukses);
      }
    }).fail(_0x6516c0 => {
      let _0x182842 = JSON.parse(_0x6516c0.responseText);
      if (_0x182842.htc_x) {
        $(".consolelog").text(_0x182842.htc_x);
      } else if (_0x182842.error) {
        $(".consolelog").text(_0x182842.error);
      }
    });
  }
});
$(document).on("click", "button.deletedlink", function () {
  let _0x4a21fd = $("input.websiteLink").val();
  if (!_0x4a21fd || _0x4a21fd < 1) {
    alert("Link Bio Kosong !!");
    return false;
  }
  if (confirm("NJOK DELETE LINK E TA ?")) {
    $.ajax({
      'url': "/biodelete",
      'type': "post",
      'beforeSend': function () {
        $(".consolelog").html("<span class=\"spinner-border spinner-border-sm\"></span> Enteni Seg Delete Link");
      },
      'headers': {
        'content-type': "application/x-www-form-urlencoded"
      },
      'data': {
        'linked_id': u_link
      }
    }).done(_0x535fe0 => {
      if (_0x535fe0.sukses) {
        $(".consolelog").text("Sukses delete link bio");
      }
    }).fail(() => {
      $(".consolelog").text("Gagal delete link bio");
    });
  }
});
$(document).on("click", "button.deletenumber", function () {
  let _0x7032b9 = $("input.phone_number_profile").val();
  if (!_0x7032b9 || _0x7032b9 < 1) {
    alert("Number Blank Kosong !!");
    return false;
  } else if (confirm("NJOK DELETE NOMERE TA ?")) {
    $.ajax({
      'url': "/delete_number",
      'type': "get",
      'beforeSend': function () {
        $(".consolelog").html("<span class=\"spinner-border spinner-border-sm\"></span> Enteni Seg Delete number");
      },
      'data': {
        'nomer': _0x7032b9
      }
    }).done(_0x46b181 => {
      if (_0x46b181.sukses) {
        $(".consolelog").text(_0x46b181.sukses);
      }
    }).fail(() => {
      $(".consolelog").text("Gagal delete number");
    });
  }
});
$(document).on("click", "button.copystate_username", async function () {
  let _0xb5aff1 = $(".state_username").text();
  await state_copy(_0xb5aff1);
});
$(document).on("click", "button.copy_uid", function () {
  let _0x2ad006 = '';
  _0x2ad006 = $("textarea.uid").val();
  copyToClipboard(_0x2ad006, "textarea.uid");
});
$(document).on("click", "button.copy_misc", function () {
  let _0x84812d = '';
  _0x84812d = $("textarea.commit").val();
  copyToClipboard(_0x84812d, "textarea.commit");
});
$(document).on("click", "button.copystate_usernamethreads", async function () {
  let _0x5216ea = $("span.state_username_threads").text();
  await state_copy(_0x5216ea);
});
$(document).on("click", "button.copy_uid_threads", function () {
  let _0x22e9ed = '';
  _0x22e9ed = $("textarea.uidthreadsids").val();
  copyToClipboard(_0x22e9ed, "textarea.uidthreadsids");
});
$(document).on("click", "button.copy_misc_threads", function () {
  let _0x2cbad7 = '';
  _0x2cbad7 = $("textarea.commitThreads").val();
  copyToClipboard(_0x2cbad7, "textarea.commitThreads");
});
function copyToClipboard(_0x4596f7, _0x4ad37a) {
  var _0x1e87eb = document.createElement("textarea");
  _0x1e87eb.value = _0x4596f7;
  document.body.appendChild(_0x1e87eb);
  _0x1e87eb.select();
  try {
    document.execCommand("copy");
    $(_0x4ad37a).focus().select();
  } catch (_0x4dd495) {
    alert("Gagal Copy !!");
  }
  document.body.removeChild(_0x1e87eb);
}
$(document).on("click", "button.simulate_create", async function () {
  let _0x5e7b96 = $("input.email_add").val();
  if (!_0x5e7b96 || _0x5e7b96 < 1) {
    alert("Pok isi email yo . !!");
    $("button.simulate_create").html("<i class=\"fas fa-users\"></i> Start Simulate");
    return false;
  }
  if (is_checkuid == true) {
    $("button.simulate_create").html("<span class=\"spinner-border spinner-border-sm\"></span> Enteni Seg Send Code");
    await createOnetemp(checkuid_email_state);
    const _0x517c1c = await simulate_create(_0x5e7b96);
    tempmail = _0x5e7b96;
    temp_user = _0x517c1c.username;
    temp_pass = _0x517c1c.password;
    const _0xdc99e0 = setInterval(async () => {
      const _0x54b69a = await get_checkuid_mail_code(checkuid_email_state);
      if (_0x54b69a.length != 0) {
        clearInterval(_0xdc99e0);
        await DeleteOnetemp(checkuid_email_state);
        for (let _0x3fb375 = 0; _0x3fb375 < _0x54b69a.length; _0x3fb375++) {
          const _0x59e191 = _0x54b69a[_0x3fb375].subject;
          const _0xf3a8e6 = _0x59e191.replace(/\D/g, '');
          $("input.code_add").sendkeys(_0xf3a8e6);
          $("button.sendcode").html("<i class=\"fas fa-cog\"></i> Verify Email");
          $(".consolelog").text("Sukses Get Code Email");
        }
      }
    }, 10000);
  } else {
    $("button.simulate_create").html("<span class=\"spinner-border spinner-border-sm\"></span> Enteni Seg Send Code");
    const _0xd17f22 = await simulate_create(_0x5e7b96);
    tempmail = _0x5e7b96;
    temp_user = _0xd17f22.username;
    temp_pass = _0xd17f22.password;
  }
});
$(document).on("click", "button.sendcode", async function () {
  $("button.sendcode").html("<span class=\"spinner-border spinner-border-sm\"></span> Enteni Seg Simulate Create");
  let _0x30fd15 = $("input.code_add").val();
  if (!_0x30fd15 || _0x30fd15 < 1) {
    alert("Pok isi code yo . !!");
    $("button.sendcode").html("<i class=\"fas fa-users\"></i> Start Simulate");
    return false;
  }
  await onCreate(_0x30fd15, tempmail, temp_user, temp_pass);
});
async function onCreate(_0x76e0ae, _0x857dfd, _0x2d22bc, _0x339900) {
  try {
    const _0x143d08 = {
      'code': _0x76e0ae,
      'email': _0x857dfd,
      'user': _0x2d22bc,
      'password': _0x339900
    };
    const _0x3382e0 = {
      'method': "POST",
      'headers': {
        'Accept': "*/*",
        'Content-Type': "application/x-www-form-urlencoded"
      },
      'body': new URLSearchParams(_0x143d08)
    };
    const _0x53255b = await fetch("/startaddaccount", _0x3382e0);
    if (_0x53255b.ok) {
      $("span.countconsole").text("Sukses Create");
      $("button.sendcode").addClass("simulate_create");
      $("button.sendcode").html("<i class=\"fas fa-users\"></i> Start Simulate");
      $("input.code_add").addClass("email_add");
      $("input.code_add").attr("placeholder", "Masukkan Email Baru");
      $("input.code_add").val('');
      $("button.simulate_create").removeClass("sendcode");
      $("input.email_add").removeClass("code_add");
      $(".consolelog").text("Sukses Create Account");
      return _0x53255b.json();
    } else {
      $("span.countconsole").text("Gagal Create | Account Suspend");
      $("button.sendcode").addClass("simulate_create");
      $("button.sendcode").html("<i class=\"fas fa-users\"></i> Start Simulate");
      $("input.code_add").addClass("email_add");
      $("input.code_add").attr("placeholder", "New Email");
      $("input.code_add").val('');
      $("button.simulate_create").removeClass("sendcode");
      $("input.email_add").removeClass("code_add");
      $(".consolelog").text("Gagal Create Account");
    }
  } catch (_0x5b5255) {
    return _0x5b5255;
  }
}
async function simulate_create(_0x4271c1) {
  try {
    const _0x334942 = {
      'email': _0x4271c1
    };
    const _0x8625ac = {
      'method': "POST",
      'headers': {
        'Accept': "*/*",
        'Content-Type': "application/x-www-form-urlencoded"
      },
      'body': new URLSearchParams(_0x334942)
    };
    const _0x4b57c9 = await fetch("/addaccount", _0x8625ac);
    if (_0x4b57c9.ok) {
      $("button.simulate_create").addClass("sendcode");
      if (is_checkuid == true) {
        $("button.simulate_create").html("<span class=\"spinner-border spinner-border-sm\"></span> Enteni Seg Auto Check Code");
      } else {
        $("button.simulate_create").html("<i class=\"fas fa-cog\"></i> Verify Email");
      }
      $("input.email_add").addClass("code_add");
      $("input.email_add").attr("placeholder", "Masukkan Code Email Mu");
      $("button.sendcode").removeClass("simulate_create");
      $("input.code_add").removeClass("email_add");
      $("input.code_add").val('');
      $("span.countconsole").text("Check Mail Dan Submit Code");
      $(".consolelog").text("Check Mail Dan Submit Code");
      return _0x4b57c9.json();
    } else {
      $("span.countconsole").text("Gagal Send Code Mail");
      $(".consolelog").text("Gagal Send Code Mail");
    }
  } catch (_0x1c4fd5) {
    return _0x1c4fd5;
  }
}
async function state_copy(_0x17add6) {
  try {
    await navigator.clipboard.writeText(_0x17add6);
    $("button.copystate_username, button.copystate_usernamethreads").removeClass("inbtn");
    $("button.copystate_username, button.copystate_usernamethreads").addClass("btn-success");
  } catch (_0x1ebc73) {
    alert(_0x1ebc73);
    $("button.copystate_username, button.copystate_usernamethreads").removeClass("inbtn");
    $("button.copystate_username, button.copystate_usernamethreads").addClass("btn-danger");
  }
}
$(document).on("click", "button.clear_state", function () {
  localStorage.removeItem("shortUrl");
  localStorage.removeItem("autobind");
  localStorage.removeItem("KeyLive");
  localStorage.removeItem("userStateThreads");
  localStorage.removeItem("uid_cache");
  alert("Sukses Reset");
  location.reload();
});
$(document).on("click", "button.install_config", function () {
  $(".consolelog").text("Enteni Seg Fetch API user HTCONE");
  $(".threads_env").text("Enteni Seg Fetch API user HTCONE");
  $.get("/configuration", function (_0x13a8d0) {
    $(".consolelog").text(_0x13a8d0.sukses);
    $(".threads_env").text(_0x13a8d0.sukses);
  });
});
$(document).on("click", "span.uploadBranch", function () {
  $("input.base64Branch").click();
});
$(document).on("click", "button.metu", function () {
  if (confirm("Njok Metu Ig Temen Ta ?")) {
    $.ajax({
      'url': "/metu",
      'type': "get",
      'beforeSend': function () {
        $(".consolelog").html("<span class=\"spinner-border spinner-border-sm\"></span> Enteni Seg Logout Account");
      },
      'headers': {
        'content-type': "application/x-www-form-urlencoded"
      }
    }).done(_0x7e0400 => {
      if (_0x7e0400.deleteCookie == "sukses") {
        localStorage.removeItem("userState");
        location.reload();
      } else {
        alert("Gagal Metu");
        return false;
      }
    });
  }
});
$(document).on("click", "button.editwebsitelink", async function () {
  let _0x34ec9a = JSON.parse(localStorage.getItem("KeyLive"));
  let _0x2d376e = $("textarea.idusergen").val();
  let _0x2d50e8 = chance.name({
    'gender': "female",
    'middle': true
  }).replaceAll(" ", '');
  if (!_0x2d376e || _0x2d376e < 1) {
    alert("Pok Pasang Link Generate Id ??");
    $("textarea.idusergen").focus();
    return false;
  }
  if (localStorage.getItem("KeyLive") === null) {
    const _0x40251b = ["key_test_lBgRBrW84weGhUsJGfo07djgwqk4I8Nl", "key_test_gqkBIbnsmy7bPmCL46cxLicoFBm0kxvo", "key_test_ptouOpS7EeGov2TY67nJJanlBvjOp3SF", "key_test_bCf80PZbdKdiC70j4DDx2eafDxeuab6d", "key_test_eDcCIcoAeq2i1VBVRP8SefigEzg9aJoI", "key_test_jFcN0PkxHOE1nbDE0LSCbhjpsAaCXDUO"];
    const _0x42ff58 = chance.pickone(_0x40251b);
    $.ajax({
      'url': "https://api.branch.io/v1/url",
      'type': "post",
      'headers': {
        'content-type': "application/json; charset=utf-8"
      },
      'beforeSend': function () {
        $(".consolelog").text("Build Branch Link");
        $("button.editwebsitelink").text("Build");
      },
      'data': JSON.stringify({
        'branch_key': _0x42ff58,
        'data': {
          '$ios_url': _0x2d376e,
          '$android_url': _0x2d376e
        }
      })
    }).done(async _0x126873 => {
      uri = _0x126873.url;
      if ($("select.optionlink").find("option.cloudlink").length > 0) {
        const _0x1d8e67 = await CreateShortlinked(uri);
        $("input.websiteLink").val('');
        $("input.websiteLink").sendkeys(_0x1d8e67.url);
        $(".consolelog").text("Sukses Get Bio Link");
        $("button.editwebsitelink").text("generate");
      } else {
        $("input.websiteLink").val('');
        $("input.websiteLink").sendkeys(uri);
        $(".consolelog").text("Sukses Get Bio Link");
        $("button.editwebsitelink").text("generate");
      }
    }).fail(() => {
      $(".consolelog").text("Gagal Gawe Branch");
      $("button.editwebsitelink").text("generate");
    });
  } else {
    if (localStorage.getItem("KeyLive").match(/(key_live_|key_test_)/)) {
      let _0x497652 = chance.pickone(_0x34ec9a);
      $.ajax({
        'url': "https://api.branch.io/v1/url",
        'type': "post",
        'headers': {
          'content-type': "application/json; charset=utf-8"
        },
        'beforeSend': function () {
          $(".consolelog").text("Build Branch Link");
          $("button.editwebsitelink").text("Build");
        },
        'data': JSON.stringify({
          'branch_key': _0x497652,
          'data': {
            '$ios_url': _0x2d376e,
            '$android_url': _0x2d376e
          },
          'alias': _0x2d50e8.toLowerCase()
        })
      }).done(_0x545bcf => {
        uri = _0x545bcf.url;
        $("input.websiteLink").val('');
        $("input.websiteLink").sendkeys(uri);
        $(".consolelog").text("Sukses Get Bio Link");
        $("button.editwebsitelink").text("generate");
      }).fail(() => {
        $(".consolelog").text("Gagal Gawe Branch");
        $("button.editwebsitelink").text("generate");
      });
    } else {
      const _0x538c22 = chance.pickone(_0x34ec9a);
      $("input.websiteLink").val('');
      $("input.websiteLink").sendkeys(_0x538c22);
      $(".consolelog").text("Sukses Get Bio Link");
      $("button.editwebsitelink").text("generate");
    }
  }
});
$(document).on("click", "button.createlinkstory", async function () {
  let _0x42b5f4 = JSON.parse(localStorage.getItem("KeyLive"));
  let _0x2238e3 = $("textarea.idusergen").val();
  if (!_0x2238e3 || _0x2238e3 < 1) {
    alert("Pok Pasang Link Generate Id ??");
    $("textarea.idusergen").focus();
    return false;
  }
  if (localStorage.getItem("KeyLive") === null) {
    const _0x10aecc = ["key_test_lBgRBrW84weGhUsJGfo07djgwqk4I8Nl", "key_test_gqkBIbnsmy7bPmCL46cxLicoFBm0kxvo", "key_test_ptouOpS7EeGov2TY67nJJanlBvjOp3SF", "key_test_bCf80PZbdKdiC70j4DDx2eafDxeuab6d", "key_test_eDcCIcoAeq2i1VBVRP8SefigEzg9aJoI", "key_test_jFcN0PkxHOE1nbDE0LSCbhjpsAaCXDUO"];
    const _0x34566d = chance.pickone(_0x10aecc);
    $.ajax({
      'url': "https://api.branch.io/v1/url",
      'type': "post",
      'headers': {
        'content-type': "application/json; charset=utf-8"
      },
      'beforeSend': function () {
        $(".consolelog").text("Build Branch Link");
        $("button.createlinkstory").text("Build");
      },
      'data': JSON.stringify({
        'branch_key': _0x34566d,
        'data': {
          '$ios_url': _0x2238e3,
          '$android_url': _0x2238e3
        }
      })
    }).done(async _0x5dd583 => {
      uri = _0x5dd583.url;
      if ($("select.optionlink").find("option.cloudlink").length > 0) {
        const _0x25a2f9 = await CreateShortlinked(uri);
        $("input.link_story").val('');
        $("input.link_story").sendkeys(_0x25a2f9.url);
        $(".consolelog").text("Sukses Generate Link Story");
        $("button.createlinkstory").text("generate");
      } else {
        $("input.link_story").val('');
        $("input.link_story").sendkeys(uri);
        $(".consolelog").text("Sukses Generate Link Story");
        $("button.createlinkstory").text("generate");
      }
    }).fail(() => {
      $(".consolelog").text("Gagal Gawe Branch");
      $("button.createlinkstory").text("generate");
    });
  } else {
    if (localStorage.getItem("KeyLive").match(/(key_live_|key_test_)/)) {
      let _0xb335c7 = chance.pickone(_0x42b5f4);
      $.ajax({
        'url': "https://api.branch.io/v1/url",
        'type': "post",
        'headers': {
          'content-type': "application/json; charset=utf-8"
        },
        'beforeSend': function () {
          $(".consolelog").text("Build Branch Link");
          $("button.createlinkstory").text("Build");
        },
        'data': JSON.stringify({
          'branch_key': _0xb335c7,
          'data': {
            '$ios_url': _0x2238e3,
            '$android_url': _0x2238e3
          }
        })
      }).done(_0x52b7a4 => {
        uri = _0x52b7a4.url;
        $("input.link_story").val('');
        $("input.link_story").sendkeys(uri);
        $(".consolelog").text("Sukses Generate Link Story");
        $("button.createlinkstory").text("generate");
      }).fail(() => {
        $(".consolelog").text("Gagal Gawe Branch");
        $("button.createlinkstory").text("generate");
      });
    } else {
      const _0x34e759 = chance.pickone(_0x42b5f4);
      $("input.link_story").val('');
      $("input.link_story").sendkeys(_0x34e759);
      $(".consolelog").text("Sukses Generate Link Story");
      $("button.createlinkstory").text("generate");
    }
  }
});
$(document).on("click", ".biobuild", function () {
  const _0x2b3950 = $("input.usernameprofile").val();
  const _0x306dca = '📍' + chance.city() + ", " + chance.country() + "\n" + chance.age({
    'type': "teen"
  }) + " years single.\nOfficial @" + _0x2b3950 + "\nContact Me😘\n👇👇";
  $("textarea.biograpfy").val('');
  $("textarea.biograpfy").sendkeys(_0x306dca);
});
$(document).on("click", "input#link_dm", function () {
  if (localStorage.getItem("KeyLive").match(/(workers.dev)/)) {
    $(".config_deeplinking").show();
    $(".config_key").hide();
  }
});
$(document).on("click", "button.submitcode", () => {
  let _0x3d6637 = $("input.code_email").val();
  let _0x37bb66 = document.location.hash.replace('#', '');
  if (!_0x3d6637 || _0x3d6637 < 1) {
    alert("Endi Code Ne ?");
    $("input.code_email").focus();
    return false;
  }
  if (dismiessed == false) {
    changeUrl = "/submitcode";
  } else {
    changeUrl = "/discode";
  }
  $.ajax({
    'url': changeUrl,
    'type': "post",
    'beforeSend': function () {
      $("button.submitcode").html("<span class=\"spinner-border spinner-border-sm\"></span> Enteni Seg");
    },
    'headers': {
      'content-type': "application/x-www-form-urlencoded"
    },
    'data': {
      'code': _0x3d6637,
      'from': _0x37bb66
    }
  }).done(_0x5bfa49 => {
    dismiessed = false;
    succesLogin = _0x5bfa49.sukses;
    $("button.submitcode").text('Ok');
    $(".consolelog").text(succesLogin);
    location.reload();
  }).fail(_0x405abd => {
    let _0x3dd8f6 = JSON.parse(_0x405abd.responseText);
    if (_0x3dd8f6.htc_x) {
      $("button.submitcode").text("Submit Code");
      $(".consolelog").text(_0x3dd8f6.htc_x);
    } else {
      if (_0x3dd8f6.error.challenge.url.indexOf("suspended") > -1) {
        $(".consolelog").text("Akun Suspend");
      } else if (_0x3dd8f6.error.challenge.url.indexOf("challenge") > -1) {
        $(".consolelog").text("Akun Captcha | Dismis | Change Password | Reload atau open new tab untuk solve !");
      }
    }
  });
});
$(document).on("click", "button.sandiganti", () => {
  let _0x18d96f = $("input.sandi_lama").val();
  let _0x284420 = $("input.sandi_baru").val();
  if (!_0x18d96f || _0x18d96f < 1) {
    alert("Endi Sandi Lawas E");
    $("input.sandi_lama").focus();
    return false;
  }
  if (!_0x284420 || _0x284420 < 1) {
    alert("Endi Sandi Anyar E");
    $("input.sandi_baru").focus();
    return false;
  }
  $.ajax({
    'url': "/web_password_change",
    'type': "get",
    'beforeSend': function () {
      $("button.sandiganti").html("<span class=\"spinner-border spinner-border-sm\"></span> Enteni Seg");
    },
    'headers': {
      'content-type': "application/x-www-form-urlencoded"
    },
    'data': {
      'from': capctha_from,
      'id': node_id,
      'guid': guid_id,
      'deviceidLog': deviceidLog_id,
      'challenge_context': challenge_context_id,
      'old_password': _0x18d96f,
      'new_password': _0x284420
    }
  }).done(_0x200d62 => {
    $("button.sandiganti").text('Ok');
    location.reload();
  }).fail(_0x4ff029 => {
    let _0x105405 = JSON.parse(_0x4ff029.responseText);
    if (_0x105405.htc_x) {
      $(".consolelog").text(_0x105405.htc_x);
    } else {
      if (_0x105405.error.challenge.url.indexOf("suspended") > -1) {
        $(".consolelog").text("Akun Suspend");
      } else if (_0x105405.error.challenge.url.indexOf("challenge") > -1) {
        $(".consolelog").text("Akun Captcha | Dismis | Change Password | Reload atau open new tab untuk solve !");
      }
    }
  });
});
$(document).on("click", ".stoped", function () {
  $("button.grabber").text("uid");
  $(".stoped").hide();
  $(".consolelog").text("Grab Uid stoped");
  if (aborted) {
    aborted.abort();
  }
});
$(document).on("click", "button.edit_profile", function () {
  $("input.fullname").val(per);
  $("input.usernameprofile").val(ioa);
  $("textarea.biograpfy").val(lowe);
  $("input.websiteLink").val(ire);
  credentials();
});
$(document).on("click", "button.editaccount", function () {
  let _0x291678 = $("textarea.biograpfy").val();
  let _0x1c37b8 = $("input.websiteLink").val();
  if (!_0x291678 || _0x291678 < 1) {
    alert("Isi Bione ?");
    return false;
  }
  $.ajax({
    'url': "/editprofile",
    'type': "post",
    'headers': {
      'content-type': "application/x-www-form-urlencoded"
    },
    'beforeSend': function () {
      $("button.editaccount").html("<span class=\"spinner-border spinner-border-sm\"></span> Enteni Seg");
    },
    'data': {
      'linkid': u_link,
      'kata': _0x291678,
      'link': _0x1c37b8
    }
  }).done(() => {
    $("button.editaccount").html("<i class=\"fas fa-user-check\"></i> TERSIMPAN");
    location.reload();
  }).fail(_0x3b4d5a => {
    let _0x50e619 = JSON.parse(_0x3b4d5a.responseText);
    if (_0x50e619.htc_x) {
      $(".consolelog").text(_0x50e619.htc_x);
    } else {
      if (_0x50e619.error.challenge.url.indexOf("suspended") > -1) {
        $(".consolelog").text("Akun Suspend");
      } else if (_0x50e619.error.challenge.url.indexOf("challenge") > -1) {
        $(".consolelog").text("Akun Captcha | Dismis | Change Password | Reload atau open new tab untuk solve !");
      }
    }
  });
});
$(document).on("click", "button.uploadimage", function () {
  let _0x9fa6ce = $("p.base64").text();
  let _0x57ac0e = _0x9fa6ce.trim();
  if (_0x57ac0e.length == 0) {
    alert("Pok Pileh Potone Disek");
    return false;
  }
  $.ajax({
    'url': "/upload",
    'type': "post",
    'beforeSend': function () {
      $("button.uploadimage").html("<span class=\"spinner-border spinner-border-sm\"></span> Enteni Seg");
    },
    'data': {
      'changeprofilepicture': _0x9fa6ce
    }
  }).done(_0x4056a4 => {
    $(".consolelog").text(_0x4056a4.sukses);
    location.reload();
  }).fail(_0x5dec24 => {
    let _0x2a7214 = JSON.parse(_0x5dec24.responseText);
    if (_0x2a7214.htc_x) {
      $(".consolelog").text(_0x2a7214.htc_x);
    } else {
      if (_0x2a7214.error.challenge.url.indexOf("suspended") > -1) {
        $(".consolelog").text("Akun Suspend");
      } else if (_0x2a7214.error.challenge.url.indexOf("challenge") > -1) {
        $(".consolelog").text("Akun Captcha | Dismis | Change Password | Reload atau open new tab untuk solve !");
      }
    }
  });
});
$(document).on("click", "button.uploadpost", function () {
  let _0x3433d3 = $("p.uploadbase64").text();
  let _0x3c405a = _0x3433d3.trim();
  let _0x3afd03 = $("textarea.captiontext").val();
  if (_0x3c405a.length == 0) {
    alert("Pok Pileh Potone Disek");
    return false;
  }
  $.ajax({
    'url': "/postid",
    'type': "post",
    'beforeSend': function () {
      $("button.uploadpost").html("<span class=\"spinner-border spinner-border-sm\"></span> Enteni Seg");
    },
    'data': {
      'photoID': _0x3433d3,
      'caption': _0x3afd03
    }
  }).done(_0x702781 => {
    $(".consolelog").text(_0x702781.sukses);
    $("button.uploadpost").text(_0x702781.sukses);
    location.reload();
  }).fail(_0x5b7eee => {
    let _0x184bb0 = JSON.parse(_0x5b7eee.responseText);
    if (_0x184bb0.htc_x) {
      $(".consolelog").text(_0x184bb0.htc_x);
    } else {
      if (_0x184bb0.error.challenge.url.indexOf("suspended") > -1) {
        $(".consolelog").text("Akun Suspend");
      } else if (_0x184bb0.error.challenge.url.indexOf("challenge") > -1) {
        $(".consolelog").text("Akun Captcha | Dismis | Change Password | Reload atau open new tab untuk solve !");
      }
    }
  });
});
$(document).on("click", "button.uploadstory", function () {
  let _0x521959 = $("p.uploadstorybase64").text();
  let _0x1a802f = _0x521959.trim();
  let _0x4d9841 = $("textarea.linkstorycaption").val();
  let _0x3b8364 = $("input.link_story").val();
  if (_0x1a802f.length == 0) {
    alert("Pok Pileh Potone Disek");
    return false;
  }
  if (!_0x3b8364 || _0x3b8364 < 1) {
    alert("Isi Link e?");
    return false;
  }
  if (!_0x4d9841 || _0x4d9841 < 1) {
    alert("Isi Cutom Text Description?");
    return false;
  }
  $.ajax({
    'url': "/poststory",
    'type': "post",
    'beforeSend': function () {
      $("button.uploadstory").html("<span class=\"spinner-border spinner-border-sm\"></span> Enteni Seg");
    },
    'data': {
      'photoID': _0x521959,
      'kata': _0x4d9841,
      'link': _0x3b8364
    }
  }).done(_0x146221 => {
    $(".consolelog").text(_0x146221.sukses);
    $("button.uploadstory").text(_0x146221.sukses);
    location.reload();
  }).fail(_0x358281 => {
    let _0xb22cb0 = JSON.parse(_0x358281.responseText);
    if (_0xb22cb0.htc_x) {
      $(".consolelog").text(_0xb22cb0.htc_x);
    } else {
      if (_0xb22cb0.error.challenge.url.indexOf("suspended") > -1) {
        $(".consolelog").text("Akun Suspend");
      } else if (_0xb22cb0.error.challenge.url.indexOf("challenge") > -1) {
        $(".consolelog").text("Akun Captcha | Dismis | Change Password | Reload atau open new tab untuk solve !");
      }
    }
  });
});
$(document).on("click", "button.changeemail", async () => {
  let _0x11c3e8 = $("input.newmail").val();
  let _0x381c75 = $("span.fb_v2_uid").text();
  if (!_0x11c3e8 || _0x11c3e8 < 1) {
    alert("Endi Email Anyare ?");
    $("button.changeemail").html("<i class=\"fas fa-cog\"></i> Simpan");
    return false;
  }
  $("button.changeemail").html("<span class=\"spinner-border spinner-border-sm\"></span> Enteni Seg");
  await createOnetemp(checkuid_email_state);
  $.ajax({
    'url': "/ganti_email",
    'type': "post",
    'data': {
      'email': _0x11c3e8,
      'uid_v2': _0x381c75
    }
  }).done(async _0x10c35c => {
    client_email = _0x10c35c.data.client_email;
    client_uid_v2 = _0x10c35c.data.client_uid_v2;
    $(".consolelog").text(_0x10c35c.sukses);
    $("input.newmail").val('');
    $("input.newmail").attr("placeholder", _0x10c35c.sukses);
    $("button.changeemail").addClass("verify_email");
    if (is_checkuid == true) {
      $("button.changeemail").html("<span class=\"spinner-border spinner-border-sm\"></span> Enteni Auto Check Code Email");
      $("button.verify_email").removeClass("changeemail");
      const _0x47dae8 = setInterval(async () => {
        const _0x127e5d = await get_checkuid_mail_code(checkuid_email_state);
        if (_0x127e5d.length != 0) {
          clearInterval(_0x47dae8);
          await DeleteOnetemp(checkuid_email_state);
          for (let _0x27335e = 0; _0x27335e < _0x127e5d.length; _0x27335e++) {
            const _0x2d2c72 = _0x127e5d[_0x27335e].subject;
            if (_0x2d2c72.match(/Confirm|Konfirmasi/g)) {
              const _0x21dea2 = _0x127e5d[_0x27335e].content;
              const _0x494ed2 = _0x21dea2.match(/text-align:center;padding-bottom:25px;">(.+?)<\/td>/i)[1];
              $("input.newmail").sendkeys(_0x494ed2);
              $("button.verify_email").html("<i class=\"fas fa-cog\"></i> Verify Email");
            }
          }
        }
      }, 10000);
    } else {
      $("button.changeemail").html("<i class=\"fas fa-cog\"></i> Verify Email");
      $("button.verify_email").removeClass("changeemail");
    }
  }).fail(_0x14eba6 => {
    let _0x723370 = JSON.parse(_0x14eba6.responseText);
    if (_0x723370.htc_x) {
      $(".consolelog").text(_0x723370.htc_x);
      $("button.changeemail").html("<i class=\"fas fa-cog\"></i> Simpan");
    } else {
      if (_0x723370.error.challenge.url.indexOf("suspended") > -1) {
        $(".consolelog").text("Akun Captha");
        $("button.changeemail").html("<i class=\"fas fa-cog\"></i> Simpan");
      } else if (_0x723370.error.challenge.url.indexOf("challenge") > -1) {
        $("button.changeemail").html("<i class=\"fas fa-cog\"></i> Simpan");
        $(".consolelog").text("Akun Belum Terkoneksi Ke Meta Atau Akun Masih Versi Lama");
        $("button.close").click();
      }
    }
  });
});
$(document).on("input", "input.newphonenumber", function () {
  const _0x4107fb = $(this).val().replace(/^0/, "+62");
  $(this).val(_0x4107fb);
});
$(document).on("click", "button.submit_phone_number", function () {
  let _0xbd3ccc = $("input.newphonenumber").val();
  let _0x25a2b2 = $("span.fb_v2_uid").text();
  if (!_0xbd3ccc || _0xbd3ccc < 1) {
    alert("Endi Nomere ?");
    $("button.submit_phone_number").html("<i class=\"fas fa-cog\"></i> Simpan");
    return false;
  }
  $.ajax({
    'url': "/ganti_email",
    'type': "post",
    'beforeSend': function () {
      $("button.submit_phone_number").html("<span class=\"spinner-border spinner-border-sm\"></span> Enteni Seg");
    },
    'data': {
      'email': _0xbd3ccc,
      'uid_v2': _0x25a2b2
    }
  }).done(async _0x16d638 => {
    client_email = _0x16d638.data.client_email;
    client_uid_v2 = _0x16d638.data.client_uid_v2;
    $(".consolelog").text(_0x16d638.sukses);
    $("input.newphonenumber").val('');
    $("input.newphonenumber").addClass("code_otp_nomer");
    $("input.code_otp_nomer").removeClass("newphonenumber");
    $("input.code_otp_nomer").attr("placeholder", _0x16d638.sukses);
    $("button.submit_phone_number").addClass("verify_phone");
    if (is_otp_number == true) {
      $("button.submit_phone_number").html("<span class=\"spinner-border spinner-border-sm\"></span> Enteni Auto Check Otp Code");
      const _0x4d2db4 = setInterval(async () => {
        not_sms_code++;
        const _0x1f8f61 = await otpSms(otp_code, id_number);
        const _0xcfe1e7 = _0x1f8f61.status;
        if (_0xcfe1e7 == true) {
          const _0x2d1a46 = _0x1f8f61.data.sms;
          if (_0x2d1a46 !== null) {
            clearInterval(_0x4d2db4);
            const _0x3f3944 = _0x2d1a46.match(/{\"sms\":\"<#> (.+?) adalah/i)[1];
            const _0x13a22c = _0x3f3944.replace(" ", '');
            $("input.code_otp_nomer").sendkeys(_0x13a22c);
            $("button.verify_phone").removeClass("submit_phone_number");
            $("button.verify_phone").html("<i class=\"fas fa-cog\"></i> Verify Phone Number");
          }
          if (not_sms_code == 10) {
            clearInterval(_0x4d2db4);
            await cancel_order(otp_code, id_number);
            $("input.newphonenumber").attr("placeholder", "Masukkan Nomer Atau Generate Otp");
            $("button.submit_phone_number").html("<i class=\"fas fa-cog\"></i> Simpan");
            $(".consolelog").text("Order Auto Cancel Karena Sms Tidak Keluar Setelah 1 Menit");
          }
        }
      }, 3000);
    } else {
      $("button.submit_phone_number").html("<i class=\"fas fa-cog\"></i> Verify Phone Number");
      $("button.verify_phone").removeClass("submit_phone_number");
    }
  }).fail(_0x25e816 => {
    let _0x7363e8 = JSON.parse(_0x25e816.responseText);
    if (_0x7363e8.htc_x) {
      $(".consolelog").text(_0x7363e8.htc_x);
      $("button.submit_phone_number").html("<i class=\"fas fa-cog\"></i> Simpan");
    } else {
      if (_0x7363e8.error.challenge.url.indexOf("suspended") > -1) {
        $(".consolelog").text("Akun Captha");
        $("button.submit_phone_number").html("<i class=\"fas fa-cog\"></i> Simpan");
      } else if (_0x7363e8.error.challenge.url.indexOf("challenge") > -1) {
        $("button.submit_phone_number").html("<i class=\"fas fa-cog\"></i> Simpan");
        $(".consolelog").text("Akun Belum Terkoneksi Ke Meta Atau Akun Masih Versi Lama");
        $("button.close").click();
      }
    }
  });
});
$(document).on("click", "button.gantipassword", function () {
  let _0x58f193 = $("input.current_password").val();
  let _0x3d85b9 = $("input.new_password").val();
  if (!_0x58f193 || _0x58f193 < 1) {
    alert("Endi Password Lawas e ?");
    $("button.gantipassword").html("<i class=\"fas fa-cog\"></i> Simpan");
    return false;
  }
  if (!_0x3d85b9 || _0x3d85b9 < 1) {
    alert("Endi Password Anyar e ?");
    $("button.gantipassword").html("<i class=\"fas fa-cog\"></i> Simpan");
    return false;
  }
  $.ajax({
    'url': "/ganti_password",
    'type': "post",
    'beforeSend': function () {
      $("button.gantipassword").html("<span class=\"spinner-border spinner-border-sm\"></span> Enteni Seg");
    },
    'data': {
      'old_password': _0x58f193,
      'new_password': _0x3d85b9
    }
  }).done(_0x36acb1 => {
    $(".consolelog").text(_0x36acb1.sukses.message);
    $("input.current_password").val('');
    $("input.new_password").val('');
    $("button.gantipassword").html("<i class=\"fas fa-cog\"></i> Simpan");
    $("button.close").click();
  }).fail(_0x10a57e => {
    let _0x1279e6 = JSON.parse(_0x10a57e.responseText);
    if (_0x1279e6.htc_x) {
      $(".consolelog").text(_0x1279e6.htc_x);
      $("button.gantipassword").html("<i class=\"fas fa-cog\"></i> Simpan");
    } else {
      if (_0x1279e6.error.challenge.url.indexOf("suspended") > -1) {
        $(".consolelog").text("Akun Captha");
        $("button.gantipassword").html("<i class=\"fas fa-cog\"></i> Simpan");
      } else if (_0x1279e6.error.challenge.url.indexOf("challenge") > -1) {
        $("button.gantipassword").html("<i class=\"fas fa-cog\"></i> Simpan");
        $(".consolelog").text("Akun Belum Terkoneksi Ke Meta Atau Akun Masih Versi Lama");
        $("button.close").click();
      }
    }
  });
});
$(document).on("click", "button.verify_email", function () {
  let _0x25ea4f = $("input.newmail").val();
  if (!_0x25ea4f || _0x25ea4f < 1) {
    alert("Endi Code Email e ?");
    $("button.verify_email").html("<i class=\"fas fa-cog\"></i> Simpan");
    return false;
  }
  $.ajax({
    'url': "/code_email",
    'type': "post",
    'beforeSend': function () {
      $("button.verify_email").html("<span class=\"spinner-border spinner-border-sm\"></span> Enteni Seg");
    },
    'data': {
      'code': _0x25ea4f,
      'email': client_email,
      'uidv': client_uid_v2
    }
  }).done(_0x25048f => {
    $(".consolelog").text(_0x25048f.sukses);
    $("input.newmail").val('');
    $("input.newmail").attr("placeholder", "New Email");
    $("button.verify_email").addClass("changeemail");
    $("button.verify_email").html("<i class=\"fas fa-cog\"></i> Simpan");
    $("button.changeemail").removeClass("verify_email");
    $("button.close").click();
  }).fail(_0x1dd71c => {
    let _0x5504f4 = JSON.parse(_0x1dd71c.responseText);
    if (_0x5504f4.htc_x) {
      $(".consolelog").text(_0x5504f4.htc_x);
    } else {
      if (_0x5504f4.error.challenge.url.indexOf("suspended") > -1) {
        $(".consolelog").text("Akun Suspend");
      } else if (_0x5504f4.error.challenge.url.indexOf("challenge") > -1) {
        $(".consolelog").text("Akun Captcha | Dismis | Change Password | Reload atau open new tab untuk solve !");
      }
    }
  });
});
$(document).on("click", "button.verify_phone", function () {
  let _0x179d49 = $("input.code_otp_nomer").val();
  if (!_0x179d49 || _0x179d49 < 1) {
    alert("Endi Code Phone Number e ?");
    $("button.verify_phone").html("<i class=\"fas fa-cog\"></i> Simpan");
    return false;
  }
  $.ajax({
    'url': "/code_email",
    'type': "post",
    'beforeSend': function () {
      $("button.verify_phone").html("<span class=\"spinner-border spinner-border-sm\"></span> Enteni Seg");
    },
    'data': {
      'code': _0x179d49,
      'email': client_email,
      'uidv': client_uid_v2
    }
  }).done(_0x3af1b8 => {
    $(".consolelog").text(_0x3af1b8.sukses);
    $("input.code_otp_nomer").val('');
    $("input.code_otp_nomer").addClass("newphonenumber");
    $("input.newphonenumber").removeClass("code_otp_nomer");
    $("input.newphonenumber").attr("placeholder", "New Phone Number | Generete Otp Number");
    $("button.verify_phone").addClass("submit_phone_number");
    $("button.verify_phone").html("<i class=\"fas fa-cog\"></i> Simpan");
    $("button.verify_phone").removeClass("verify_phone");
    $("button.close").click();
  }).fail(_0x3f08ff => {
    let _0x392267 = JSON.parse(_0x3f08ff.responseText);
    if (_0x392267.htc_x) {
      $(".consolelog").text(_0x392267.htc_x);
    } else {
      if (_0x392267.error.challenge.url.indexOf("suspended") > -1) {
        $(".consolelog").text("Akun Suspend");
      } else if (_0x392267.error.challenge.url.indexOf("challenge") > -1) {
        $(".consolelog").text("Akun Captcha | Dismis | Change Password | Reload atau open new tab untuk solve !");
      }
    }
  });
});
$(document).on("click", "button.checkuid", async function () {
  const _0x3f54e5 = ["checkuid.com", "lnk.gb.net", "pinjol.me", "instags.shop", "pamanbob.com", "orc.com.de"];
  const _0x4c4751 = chance.word({
    'length': 0xf
  }).toLowerCase();
  const _0x59bfc7 = _0x4c4751 + '@' + chance.pickone(_0x3f54e5);
  checkuid_email_state = _0x59bfc7;
  is_checkuid = true;
  $("input.newmail, input.email_add").val('');
  $("input.newmail, input.email_add").sendkeys(_0x59bfc7);
});
$(document).on("click", "button.get_otp", async function () {
  $("button.get_otp").text("run");
  const _0x2804db = await otpOrder(otp_code);
  const _0x5b4270 = _0x2804db.status;
  if (_0x5b4270 == true) {
    const _0x43a950 = _0x2804db.data.number;
    const _0x4ae454 = _0x2804db.data.status;
    const _0x11477c = _0x43a950.replace('0', "+62");
    const _0x79c68b = _0x2804db.data.order_id;
    id_number = _0x79c68b;
    is_otp_number = true;
    $("input.newphonenumber").val('');
    $("input.newphonenumber").sendkeys(_0x11477c);
    $(".consolelog").text(_0x4ae454);
  } else {
    $(".consolelog").text("Gagal Order OTP number");
  }
});
async function otpOrder(_0x5ea91d) {
  const _0x32f3a0 = await randomOperator(_0x5ea91d);
  const _0x10c3d9 = chance.pickone(_0x32f3a0.data);
  try {
    const _0x27609c = "https://otpcepat.org/api/handler_api.php?api_key=" + _0x5ea91d + "&action=get_order&operator_id=" + _0x10c3d9 + "&service_id=190&country_id=6";
    const _0x373808 = {
      'method': "get"
    };
    const _0x46176b = await fetch(_0x27609c, _0x373808);
    if (_0x46176b.ok) {
      $("button.get_otp").text("otp");
      return _0x46176b.json();
    } else {
      alert("Gagal Get Number. Check Saldo Atau Api Error");
    }
  } catch (_0x5409e) {
    return _0x5409e;
  }
}
async function randomOperator(_0x1aeb0d) {
  try {
    const _0x192c83 = "https://otpcepat.org/api/handler_api.php?api_key=" + _0x1aeb0d + "&action=getOperators&country_id=6";
    const _0x1c58b2 = {
      'method': "get"
    };
    const _0x1d2af0 = await fetch(_0x192c83, _0x1c58b2);
    if (_0x1d2af0.ok) {
      $("button.get_otp").text("otp");
      return _0x1d2af0.json();
    } else {
      alert("Gagal Get Number. Check Saldo Atau Api Error");
    }
  } catch (_0xe035f4) {
    return _0xe035f4;
  }
}
async function cancel_order(_0x44afcb, _0xd12a9c) {
  try {
    const _0x26e016 = "https://otpcepat.org/api/handler_api.php?api_key=" + _0x44afcb + "&action=set_status&order_id=" + _0xd12a9c + "&status=2";
    const _0x3f9934 = {
      'method': "get"
    };
    const _0x4c55c1 = await fetch(_0x26e016, _0x3f9934);
    if (_0x4c55c1.ok) {
      return _0x4c55c1.json();
    }
  } catch (_0x444465) {
    return _0x444465;
  }
}
async function otpSms(_0x472b40, _0x127a8f) {
  try {
    const _0x1b5337 = "https://otpcepat.org/api/handler_api.php?api_key=" + _0x472b40 + "&action=get_status&order_id=" + _0x127a8f;
    const _0x4609a1 = {
      'method': "get"
    };
    const _0x2aeed0 = await fetch(_0x1b5337, _0x4609a1);
    if (_0x2aeed0.ok) {
      return _0x2aeed0.json();
    }
  } catch (_0x56384f) {
    return _0x56384f;
  }
}
async function get_checkuid_mail_code(_0x364ecf) {
  try {
    const _0xf78f58 = {
      'method': "POST",
      'body': JSON.stringify({
        'email': _0x364ecf
      })
    };
    const _0x135d1d = await fetch("https://www.htconetemp.com/api/onehtc/inbox", _0xf78f58);
    if (_0x135d1d.ok) {
      return _0x135d1d.json();
    }
  } catch (_0x411496) {
    return _0x411496;
  }
}
async function DeleteOnetemp(_0x19b5e7) {
  try {
    const _0x3b391a = {
      'method': "POST",
      'body': JSON.stringify({
        'email': _0x19b5e7
      })
    };
    const _0x5e98cc = await fetch("https://www.htconetemp.com/api/onehtc/delete", _0x3b391a);
    if (_0x5e98cc.ok) {
      return _0x5e98cc.text();
    }
  } catch (_0x289856) {
    return _0x289856;
  }
}
async function createOnetemp(_0x59b339) {
  try {
    const _0x343405 = {
      'method': "POST",
      'body': JSON.stringify({
        'domain': _0x59b339
      })
    };
    const _0x28f78e = await fetch("https://www.htconetemp.com/api/onehtc/create", _0x343405);
    if (_0x28f78e.ok) {
      return _0x28f78e.text();
    }
  } catch (_0x57a60b) {
    return _0x57a60b;
  }
}
$(document).on("click", "button.grabber", async function () {
  let _0x3f0949 = $("textarea.commit").val();
  let _0x164a4f = $("textarea.uid").val().split("\n");
  let _0x3e149a = $("textarea.commit").val().split("\n");
  let _0x35cf9d;
  let _0x1d7a14 = $("input[name='chooseUID']:checked").val();
  let _0x591945 = $("input[name='getmass_uid']:checked").val();
  $("button.grabber").text("run");
  if (_0x1d7a14 == "uidPublic") {
    _0x35cf9d = false;
  } else if (_0x1d7a14 == "uidPrivate") {
    _0x35cf9d = true;
  }
  if ($("select.uidgrab").find("option.massuid").length > 0) {
    if (!_0x3e149a || _0x3e149a < 1) {
      alert("Endi Uid Massal Seng Pengen Tek Grab ?");
      $("textarea.commit").focus();
      $("button.grabber").text("uid");
      return false;
    }
    if (!_0x591945) {
      alert("Pilih Jenis Followers Atau Following ?");
      $("button.grabber").text("uid");
      return false;
    } else {
      $(".stoped").show();
      const _0x1fa279 = await _0x339c05();
      $(".consolelog").text("Start Grab " + _0x1fa279);
      await _0x3c9d00(_0x1fa279);
    }
    async function _0x3c9d00(_0x9b07ce) {
      aborted = $.ajax({
        'url': "/massuid",
        'type': "post",
        'beforeSend': function () {
          $(".consolelog").text("Start Grab : " + _0x9b07ce);
        },
        'headers': {
          'content-type': "application/x-www-form-urlencoded"
        },
        'data': {
          'what_type': _0x591945,
          'uid': _0x9b07ce,
          'type': _0x35cf9d,
          'teros': serialize
        }
      }).done(async _0x2f08b9 => {
        const _0x1cad04 = _0x2f08b9.uid;
        serialize = _0x2f08b9.stop;
        $.each(_0x1cad04, function (_0x4a9957, _0x3a603c) {
          $("textarea.uid").sendkeys(_0x3a603c + "\n");
        });
        if (_0x2f08b9.stop == null) {
          serialize = '';
          counter++;
          const _0x32bf8e = await _0x339c05();
          if (!isNaN(_0x32bf8e)) {
            $(".consolelog").text("Start Grab : " + _0x32bf8e);
            await _0x3c9d00(_0x32bf8e);
          } else {
            $("button.grabber").text("uid");
            $(".stoped").hide();
            $(".consolelog").text("Wes Entek");
          }
        } else {
          await _0x3c9d00(uidid);
        }
      }).fail(_0x528976 => {
        let _0x4047e3 = JSON.parse(_0x528976.responseText);
        $("button.grabber").text("uid");
        $(".stoped").hide();
        if (_0x4047e3.htc_x) {
          $(".consolelog").text(_0x4047e3.htc_x);
        } else {
          if (_0x4047e3.error.challenge.url.indexOf("suspended") > -1) {
            $(".consolelog").text("Akun Suspend");
          } else if (_0x4047e3.error.challenge.url.indexOf("challenge") > -1) {
            $(".consolelog").text("Akun Captcha | Dismis | Change Password | Reload atau open new tab untuk solve !");
          }
        }
      });
    }
    async function _0x339c05() {
      const _0x1de8da = _0x3e149a[counter];
      uidid = _0x1de8da;
      return _0x1de8da;
    }
  } else {
    if ($("select.uidgrab").find("option.uidfollowers").length > 0) {
      if (!_0x3f0949 || _0x3f0949 < 1) {
        alert("Endi Username Seng Pek Tek Grab Followere ?");
        $("button.grabber").text("uid");
        return false;
      } else {
        $(".stoped").show();
        _0x1e4737();
      }
      function _0x1e4737() {
        aborted = $.ajax({
          'url': "/uidfollowers",
          'type': "post",
          'beforeSend': function () {
            $(".consolelog").text("Enteni Seg");
          },
          'headers': {
            'content-type': "application/x-www-form-urlencoded"
          },
          'data': {
            'username': _0x3f0949,
            'type': _0x35cf9d,
            'useruid': guid_id,
            'teros': serialize
          }
        }).done(_0x3273e5 => {
          const _0x5221ad = _0x3273e5.uid;
          guid_id = _0x3273e5.grabuid;
          serialize = _0x3273e5.stop;
          $.each(_0x5221ad, function (_0x586e40, _0x53448a) {
            $("textarea.uid").sendkeys(_0x53448a + "\n");
          });
          if (_0x3273e5.stop == null) {
            $("button.grabber").text("uid");
            $(".consolelog").text("Wes Entek");
            $(".stoped").hide();
          } else {
            _0x1e4737();
          }
        }).fail(_0x253a64 => {
          let _0x5dd8e9 = JSON.parse(_0x253a64.responseText);
          $("button.grabber").text("uid");
          $(".stoped").hide();
          if (_0x5dd8e9.htc_x) {
            $(".consolelog").text(_0x5dd8e9.htc_x);
          } else {
            if (_0x5dd8e9.error.challenge.url.indexOf("suspended") > -1) {
              $(".consolelog").text("Akun Suspend");
            } else if (_0x5dd8e9.error.challenge.url.indexOf("challenge") > -1) {
              $(".consolelog").text("Akun Captcha | Dismis | Change Password | Reload atau open new tab untuk solve !");
            }
          }
        });
      }
    } else {
      if ($("select.uidgrab").find("option.uidfollowing").length > 0) {
        if (!_0x3f0949 || _0x3f0949 < 1) {
          alert("Endi Username Seng Pek Tek Grab Following E ?");
          $("button.grabber").text("uid");
          return false;
        } else {
          $(".stoped").show();
          _0x31b63d();
        }
        function _0x31b63d() {
          aborted = $.ajax({
            'url': "/uidfollowing",
            'type': "post",
            'beforeSend': function () {
              $(".consolelog").text("Enteni Seg");
            },
            'headers': {
              'content-type': "application/x-www-form-urlencoded"
            },
            'data': {
              'username': _0x3f0949,
              'type': _0x35cf9d,
              'useruid': guid_id,
              'teros': serialize
            }
          }).done(_0x1ad635 => {
            const _0x32f185 = _0x1ad635.uid;
            guid_id = _0x1ad635.grabuid;
            serialize = _0x1ad635.stop;
            $.each(_0x32f185, function (_0x20f3a1, _0x38fd5f) {
              $("textarea.uid").sendkeys(_0x38fd5f + "\n");
            });
            if (_0x1ad635.stop == null) {
              $("button.grabber").text("uid");
              $(".stoped").hide();
              $(".consolelog").text("Wes Entek");
            } else {
              _0x31b63d();
            }
          }).fail(_0x1fdf28 => {
            let _0x4e07fa = JSON.parse(_0x1fdf28.responseText);
            $("button.grabber").text("uid");
            $(".stoped").hide();
            if (_0x4e07fa.htc_x) {
              $(".consolelog").text(_0x4e07fa.htc_x);
            } else {
              if (_0x4e07fa.error.challenge.url.indexOf("suspended") > -1) {
                $(".consolelog").text("Akun Suspend");
              } else if (_0x4e07fa.error.challenge.url.indexOf("challenge") > -1) {
                $(".consolelog").text("Akun Captcha | Dismis | Change Password | Reload atau open new tab untuk solve !");
              }
            }
          });
        }
      } else {
        if ($("select.uidgrab").find("option.userpost").length > 0) {
          if (!_0x164a4f || _0x164a4f < 1) {
            alert("Isi Username Seng Pek Tek Grab Media ID post e ?");
            $("button.grabber").text("uid");
            $("textarea.uid").focus();
            return false;
          }
          $(".stoped").show();
          $.each(_0x164a4f, (_0x2d2cba, _0x15ca44) => {
            let _0x57a158 = true;
            let _0x4e7432 = _0x2d2cba == _0x164a4f.length - 1;
            setTimeout(async () => {
              if (_0x4e7432) {
                await _0x2f2c5a("/usermediaid", _0x15ca44, 1);
              } else {
                await _0x2f2c5a("/usermediaid", _0x15ca44, 0);
              }
            }, (_0x2d2cba + 1) * 1000);
            if (_0x4e7432) {
              _0x57a158 = false;
              return false;
            }
            return _0x57a158;
          });
          async function _0x2f2c5a(_0x58629e, _0x489ea8, _0x24ce9d) {
            aborted = $.ajax({
              'url': _0x58629e,
              'type': "post",
              'beforeSend': () => {
                $(".consolelog").text("GEt semua post media id " + _0x489ea8);
              },
              'headers': {
                'content-type': "application/x-www-form-urlencoded"
              },
              'data': {
                'username': _0x489ea8
              }
            }).done(_0x4a6f21 => {
              const _0x48bb8d = _0x4a6f21.uid;
              $.each(_0x48bb8d, function (_0xa757be, _0x3b476d) {
                $("textarea.commit").sendkeys(_0x3b476d + "\n");
              });
              if (_0x24ce9d == 1) {
                $(".stoped").hide();
                $("button.grabber").text("uid");
                $(".consolelog").text("Wes Entek");
              }
            }).fail(_0x3cf095 => {
              let _0x4e8047 = JSON.parse(_0x3cf095.responseText);
              $("button.grabber").text("uid");
              if (_0x4e8047.htc_x) {
                $(".consolelog").text(_0x4e8047.htc_x);
              } else {
                if (_0x4e8047.error.challenge.url.indexOf("suspended") > -1) {
                  $(".consolelog").text("Akun Suspend");
                } else if (_0x4e8047.error.challenge.url.indexOf("challenge") > -1) {
                  $(".consolelog").text("Akun Captcha | Dismis | Change Password | Reload atau open new tab untuk solve !");
                }
              }
            });
          }
        } else {
          if ($("select.uidgrab").find("option.uidlike").length > 0) {
            if (!_0x3e149a || _0x3e149a < 1) {
              alert("Endi Image Id Ne?");
              $("button.grabber").text("uid");
              return false;
            } else {
              $(".stoped").show();
              $("textarea.uid").val('');
              $.each(_0x3e149a, (_0x31a41f, _0x543c91) => {
                let _0x407215 = true;
                let _0x559152 = _0x31a41f == _0x3e149a.length - 1;
                setTimeout(() => {
                  if (_0x559152) {
                    _0x15174c(_0x543c91, 1);
                  } else {
                    _0x15174c(_0x543c91, 0);
                  }
                }, (_0x31a41f + 1) * 1000);
                if (_0x559152) {
                  _0x407215 = false;
                  return false;
                }
                return _0x407215;
              });
            }
            function _0x15174c(_0x4bc693, _0x487611) {
              aborted = $.ajax({
                'url': "/uidlike",
                'type': "post",
                'beforeSend': function () {
                  $(".consolelog").text("Enteni Seg");
                },
                'headers': {
                  'content-type': "application/x-www-form-urlencoded"
                },
                'data': {
                  'shortcode': _0x4bc693,
                  'type': _0x35cf9d
                }
              }).done(_0x597e71 => {
                const _0x1d29c7 = _0x597e71.uid;
                $.each(_0x1d29c7, function (_0x2e2580, _0x342568) {
                  $("textarea.uid").sendkeys(_0x342568 + "\n");
                });
                if (_0x487611 == 1) {
                  $(".stoped").hide();
                  $("button.grabber").text("uid");
                  $(".consolelog").text("Wes Entek");
                }
              }).fail(_0x4a833c => {
                let _0x58cebc = JSON.parse(_0x4a833c.responseText);
                $("button.grabber").text("uid");
                $(".stoped").hide();
                if (_0x58cebc.htc_x) {
                  $(".consolelog").text(_0x58cebc.htc_x);
                } else {
                  if (_0x58cebc.error.challenge.url.indexOf("suspended") > -1) {
                    $(".consolelog").text("Akun Suspend");
                  } else if (_0x58cebc.error.challenge.url.indexOf("challenge") > -1) {
                    $(".consolelog").text("Akun Captcha | Dismis | Change Password | Reload atau open new tab untuk solve !");
                  }
                }
              });
            }
          } else {
            if ($("select.uidgrab").find("option.graphql").length > 0) {
              if (!_0x3f0949 || _0x3f0949 < 1) {
                alert("Endi ShortCode Image Gambar e Seng Pek Tek Grab Like E ?");
                $("button.grabber").text("uid");
                return false;
              } else {
                $(".stoped").show();
                _0x50e8a9();
              }
              function _0x50e8a9() {
                aborted = $.ajax({
                  'url': "/graphql",
                  'type': "post",
                  'beforeSend': function () {
                    $(".consolelog").text("Enteni Seg");
                  },
                  'headers': {
                    'content-type': "application/x-www-form-urlencoded"
                  },
                  'data': {
                    'shortcode': _0x3f0949,
                    'type': _0x35cf9d,
                    'after': serialize
                  }
                }).done(_0x5efe0e => {
                  const _0x5c8837 = _0x5efe0e.uid;
                  serialize = _0x5efe0e.cursor;
                  $.each(_0x5c8837, function (_0x45fadc, _0x2f23ab) {
                    $("textarea.uid").sendkeys(_0x2f23ab + "\n");
                  });
                  if (_0x5efe0e.cursor == "WES ENTEK") {
                    $(".stoped").hide();
                    $("button.grabber").text("uid");
                    $(".consolelog").text(_0x5efe0e.cursor);
                  } else {
                    _0x50e8a9();
                  }
                }).fail(_0x1b4102 => {
                  let _0x5ad949 = JSON.parse(_0x1b4102.responseText);
                  $(".stoped").hide();
                  $("button.grabber").text("uid");
                  if (_0x5ad949.htc_x) {
                    $(".consolelog").text(_0x5ad949.htc_x);
                  } else {
                    if (_0x5ad949.error.challenge.url.indexOf("suspended") > -1) {
                      $(".consolelog").text("Akun Suspend");
                    } else if (_0x5ad949.error.challenge.url.indexOf("challenge") > -1) {
                      $(".consolelog").text("Akun Captcha | Dismis | Change Password | Reload atau open new tab untuk solve !");
                    }
                  }
                });
              }
            } else {
              if ($("select.uidgrab").find("option.threadid").length > 0) {
                $(".stoped").show();
                _0x21837c();
                function _0x21837c() {
                  aborted = $.ajax({
                    'url': "/thread",
                    'type': "get",
                    'data': {
                      'next': serialize
                    }
                  }).done(_0x3c41ff => {
                    const _0x224b9d = _0x3c41ff.thread;
                    serialize = _0x3c41ff.stop;
                    const _0x36f6de = JSON.parse(serialize);
                    $.each(_0x224b9d, function (_0xeb65d9, _0x583a69) {
                      $("textarea.commit").sendkeys(_0x583a69 + "\n");
                    });
                    if (_0x36f6de.moreAvailable === false) {
                      $(".stoped").hide();
                      $("button.grabber").text("uid");
                      $(".consolelog").text("Wes Entek");
                    } else {
                      _0x21837c();
                    }
                  }).fail(_0xe6cfb7 => {
                    let _0x397d27 = JSON.parse(_0xe6cfb7.responseText);
                    $(".stoped").hide();
                    $("button.grabber").text("uid");
                    if (_0x397d27.htc_x) {
                      $(".consolelog").text(_0x397d27.htc_x);
                    } else {
                      if (_0x397d27.error.challenge.url.indexOf("suspended") > -1) {
                        $(".consolelog").text("Akun Suspend");
                      } else if (_0x397d27.error.challenge.url.indexOf("challenge") > -1) {
                        $(".consolelog").text("Akun Captcha | Dismis | Change Password | Reload atau open new tab untuk solve !");
                      }
                    }
                  });
                }
              } else {
                if ($("select.uidgrab").find("option.check").length > 0) {
                  if (!_0x3e149a || _0x3e149a < 1) {
                    alert("Endi Akun seng pengen tek check?");
                    $("textarea.commit").focus();
                    $("button.grabber").text("uid");
                    return false;
                  } else {
                    $(".stoped").show();
                    $.each(_0x3e149a, function (_0x2eebf2, _0x3f17bb) {
                      const _0x59365c = true;
                      const _0x4c2415 = _0x2eebf2 == _0x3e149a.length - 1;
                      setTimeout(function () {
                        if (_0x4c2415) {
                          _0x57ad44(_0x3f17bb, 1);
                        } else {
                          _0x57ad44(_0x3f17bb, 0);
                        }
                      }, (_0x2eebf2 + 1) * 1000);
                      if (_0x4c2415) {
                        _0x59365c = false;
                        return false;
                      }
                      return _0x59365c;
                    });
                  }
                  function _0x57ad44(_0x27a958, _0x246e1f) {
                    aborted = $.ajax({
                      'url': "/check",
                      'type': "post",
                      'beforeSend': function () {
                        $(".consolelog").text("Check Akun " + _0x27a958);
                      },
                      'headers': {
                        'content-type': "application/x-www-form-urlencoded"
                      },
                      'data': {
                        'username': _0x27a958
                      }
                    }).done(_0x3c411e => {
                      if (_0x3c411e.sukses == "active") {
                        sukses++;
                        $("span.sukses").text(sukses);
                        _0x4dd148(_0x27a958);
                        $("textarea.uid").sendkeys(_0x27a958 + "\n");
                        $(".consolelog").text(_0x3c411e.sukses);
                        if (_0x246e1f == 1) {
                          $(".stoped").hide();
                          $("button.grabber").text("uid");
                          $(".consolelog").text("Wes Entek");
                        }
                      }
                    }).fail(_0x4fb5e9 => {
                      let _0x5354b7 = JSON.parse(_0x4fb5e9.responseText);
                      if (_0x5354b7.htc_x) {
                        gagal++;
                        $("span.gagal").text(gagal);
                        $(".consolelog").text(_0x5354b7.htc_x);
                        if (_0x246e1f == 1) {
                          $(".stoped").hide();
                          $("button.grabber").text("uid");
                          $(".consolelog").text("Wes Entek");
                        }
                      } else {
                        $("button.grabber").text("uid");
                        if (_0x5354b7.error.challenge.url.indexOf("suspended") > -1) {
                          $(".consolelog").text("Akun Suspend");
                        } else if (_0x5354b7.error.challenge.url.indexOf("challenge") > -1) {
                          $(".consolelog").text("Akun Captcha | Dismis | Change Password | Reload atau open new tab untuk solve !");
                        }
                      }
                    });
                  }
                  function _0x4dd148(_0x194f7a) {
                    var _0x59265b = $("textarea.commit").val().split("\n");
                    _0x59265b = _0x59265b.filter(function (_0x2cd7ac) {
                      return !_0x2cd7ac.match(_0x194f7a);
                    });
                    $("textarea.commit").val(_0x59265b.join("\n"));
                  }
                } else {
                  if ($("select.uidgrab").find("option.usernametouid").length > 0) {
                    if (!_0x3f0949 || _0x3f0949 < 1) {
                      alert("Endi Username Ta Uid Seng Pek Tek Convert ?");
                      $("textarea.commit").focus();
                      $("button.grabber").text("uid");
                      return false;
                    } else {
                      $.ajax({
                        'url': "/convertotouid",
                        'type': "post",
                        'beforeSend': function () {
                          $(".consolelog").text("Convert Username " + _0x3f0949);
                        },
                        'headers': {
                          'content-type': "application/x-www-form-urlencoded"
                        },
                        'data': {
                          'convert': _0x3f0949
                        }
                      }).done(_0x29ee1a => {
                        $("textarea.uid").sendkeys(_0x29ee1a.uid + "\n");
                        $("button.grabber").text("uid");
                        $(".consolelog").text("Sukses Convert");
                      }).fail(_0x48beb4 => {
                        let _0x490351 = JSON.parse(_0x48beb4.responseText);
                        $("button.grabber").text("uid");
                        if (_0x490351.htc_x) {
                          $(".consolelog").text(_0x490351.htc_x);
                        } else {
                          if (_0x490351.error.challenge.url.indexOf("suspended") > -1) {
                            $(".consolelog").text("Akun Suspend");
                          } else if (_0x490351.error.challenge.url.indexOf("challenge") > -1) {
                            $(".consolelog").text("Akun Captcha | Dismis | Change Password | Reload atau open new tab untuk solve !");
                          }
                        }
                      });
                    }
                  } else {
                    alert("Pilih Select UID Dulu !");
                    $("button.grabber").text("uid");
                    return false;
                  }
                }
              }
            }
          }
        }
      }
    }
  }
});
$(document).on("click", "button.toolkit", function () {
  let _0x430772 = $("textarea.uid").val().split("\n");
  let _0x46ac75;
  let _0x218e17 = $("textarea.commit").val().split("\n");
  let _0x2bf64d = $("input.delayed").val();
  let _0x116250 = $("textarea.uid").val();
  let _0x33c7cd = $("textarea.commit").val();
  let _0x41601 = $(".inusername").text();
  let _0xcc3a42 = $(".quote").text();
  let _0x17472f = $("textarea.idusergen").val();
  let _0x11f0a5 = $("input.canonical").val();
  let _0x218e4e = $("input.customimage").val();
  let _0x435d4d = $("input.chunkifyvalue").val();
  let _0x750d7 = $.trim(_0x116250).replace(/\s+/g, ',');
  let _0xb7aa04 = _0x750d7.split(',');
  let _0x1e318 = chunkify(_0xb7aa04, 10);
  let _0x50a363 = $.trim(_0x116250).replace(/\s+/g, ',');
  let _0x4b47a5 = _0x50a363.split(',');
  let _0x249e2a = chunkify(_0x4b47a5, Number(_0x435d4d));
  const _0x3f26f3 = _0x249e2a.length;
  let _0x1f3970;
  if (Number(_0x2bf64d) < 1) {
    alert("DELAY MINIMAL 1");
    $("button.toolkit").text("tamper");
    return false;
  }
  if (!_0x2bf64d) {
    _0x2bf64d = 1;
  }
  _0x2bf64d = _0x2bf64d * 1000;
  $("button.toolkit").text("run");
  if ($("select.igtools").find("option.sessionid").length > 0) {
    let _0x3bc20b = decodeURIComponent(document.cookie.match("(^|;)\\s*login_ig\\s*=\\s*([^;]+)")?.["pop"]()).replace('j:', '');
    $("textarea.cookiesid").val(_0x3bc20b);
    $("button.toolkit").text("tamper");
    $(".consolelog").text("sukses Get Session cookies");
  } else {
    if ($("select.igtools").find("option.follow").length > 0) {
      if (!_0x430772 || _0x430772 < 1) {
        alert("uid Pok Isi !");
        $("button.toolkit").text("tamper");
        return false;
      }
      $.each(_0x430772, (_0x185daa, _0x16b1df) => {
        let _0x3ef5b7 = true;
        let _0x3aadeb = _0x185daa == _0x430772.length - 1;
        setTimeout(() => {
          if (_0x3aadeb) {
            $.ajax({
              'url': "/follow",
              'type': "post",
              'beforeSend': function () {
                $(".consolelog").text("Get Uid : " + _0x16b1df);
              },
              'headers': {
                'content-type': "application/x-www-form-urlencoded"
              },
              'data': {
                'uid_follow': _0x16b1df
              }
            }).done(async _0x28a4bc => {
              sukses++;
              $("span.sukses").text(sukses);
              $(".consolelog").text("Wes Entek");
              $("button.toolkit").text("tamper");
            }).fail(_0x1006d1 => {
              let _0x1b2d42 = JSON.parse(_0x1006d1.responseText);
              gagal++;
              $("span.gagal").text(gagal);
              $(".consolelog").text("Wes Entek");
              $("button.toolkit").text("tamper");
              if (_0x1b2d42.htc_x) {
                $(".consolelog").text(_0x1b2d42.htc_x);
              } else {
                if (_0x1b2d42.error.challenge.url.indexOf("suspended") > -1) {
                  $(".consolelog").text("Akun Suspend");
                } else if (_0x1b2d42.error.challenge.url.indexOf("challenge") > -1) {
                  $(".consolelog").text("Akun Captcha | Dismis | Change Password | Reload atau open new tab untuk solve !");
                }
              }
            });
          } else {
            $.ajax({
              'url': "/follow",
              'type': "post",
              'beforeSend': function () {
                $(".consolelog").text("Get Uid : " + _0x16b1df);
              },
              'headers': {
                'content-type': "application/x-www-form-urlencoded"
              },
              'data': {
                'uid_follow': _0x16b1df
              }
            }).done(_0x2a0db9 => {
              sukses++;
              $("span.sukses").text(sukses);
              $(".consolelog").text("sukses follow");
            }).fail(_0x1e8d20 => {
              let _0xf2a29f = JSON.parse(_0x1e8d20.responseText);
              gagal++;
              $("span.gagal").text(gagal);
              if (_0xf2a29f.htc_x) {
                $(".consolelog").text(_0xf2a29f.htc_x);
              } else {
                if (_0xf2a29f.error.challenge.url.indexOf("suspended") > -1) {
                  $(".consolelog").text("Akun Suspend");
                } else if (_0xf2a29f.error.challenge.url.indexOf("challenge") > -1) {
                  $(".consolelog").text("Akun Captcha | Dismis | Change Password | Reload atau open new tab untuk solve !");
                }
              }
            });
          }
        }, (_0x185daa + 1) * _0x2bf64d);
        if (_0x3aadeb) {
          _0x3ef5b7 = false;
          return false;
        }
        return _0x3ef5b7;
      });
    } else {
      if ($("select.igtools").find("option.likeuid").length > 0) {
        if (!_0x430772 || _0x430772 < 1) {
          alert("uid Pok Isi !");
          $("button.toolkit").text("tamper");
          return false;
        }
        $.each(_0x430772, (_0x42520f, _0x4a4739) => {
          let _0x14b11f = true;
          let _0x439e15 = _0x42520f == _0x430772.length - 1;
          setTimeout(() => {
            if (_0x439e15) {
              $.ajax({
                'url': "/like",
                'type': "post",
                'beforeSend': function () {
                  $(".consolelog").text("Get Uid : " + _0x4a4739);
                },
                'headers': {
                  'content-type': "application/x-www-form-urlencoded"
                },
                'data': {
                  'uid_like': _0x4a4739
                }
              }).done(async _0x32ae3b => {
                isOk = _0x32ae3b.sukses;
                $(".consolelog").text("Wes Entek");
                $("button.toolkit").text("tamper");
                if (isOk !== "private") {
                  sukses++;
                  $("span.sukses").text(sukses);
                } else {
                  nulled++;
                  $("span.nulled").text(nulled);
                }
              }).fail(_0x30016b => {
                let _0x39965f = JSON.parse(_0x30016b.responseText);
                gagal++;
                $("span.gagal").text(gagal);
                $(".consolelog").text("Wes Entek");
                $("button.toolkit").text("tamper");
                if (_0x39965f.htc_x) {
                  $(".consolelog").text(_0x39965f.htc_x);
                } else {
                  if (_0x39965f.error.challenge.url.indexOf("suspended") > -1) {
                    $(".consolelog").text("Akun Suspend");
                  } else if (_0x39965f.error.challenge.url.indexOf("challenge") > -1) {
                    $(".consolelog").text("Akun Captcha | Dismis | Change Password | Reload atau open new tab untuk solve !");
                  }
                }
              });
            } else {
              $.ajax({
                'url': "/like",
                'type': "post",
                'beforeSend': function () {
                  $(".consolelog").text("Get Uid : " + _0x4a4739);
                },
                'headers': {
                  'content-type': "application/x-www-form-urlencoded"
                },
                'data': {
                  'uid_like': _0x4a4739
                }
              }).done(_0x50cf2d => {
                isOk = _0x50cf2d.sukses;
                if (isOk !== "private") {
                  sukses++;
                  $("span.sukses").text(sukses);
                  $(".consolelog").text("sukses like");
                } else {
                  nulled++;
                  $("span.nulled").text(nulled);
                  $(".consolelog").text("Gak Duwe Photo");
                }
              }).fail(_0x493329 => {
                let _0x3f3d51 = JSON.parse(_0x493329.responseText);
                gagal++;
                $("span.gagal").text(gagal);
                if (_0x3f3d51.htc_x) {
                  $(".consolelog").text(_0x3f3d51.htc_x);
                } else {
                  if (_0x3f3d51.error.challenge.url.indexOf("suspended") > -1) {
                    $(".consolelog").text("Akun Suspend");
                  } else if (_0x3f3d51.error.challenge.url.indexOf("challenge") > -1) {
                    $(".consolelog").text("Akun Captcha | Dismis | Change Password | Reload atau open new tab untuk solve !");
                  }
                }
              });
            }
          }, (_0x42520f + 1) * _0x2bf64d);
          if (_0x439e15) {
            _0x14b11f = false;
            return false;
          }
          return _0x14b11f;
        });
      } else {
        if ($("select.igtools").find("option.commentuid").length > 0) {
          if (!_0x430772 || _0x430772 < 1) {
            alert("Uid Pok Isi !");
            $("button.toolkit").text("tamper");
            return false;
          }
          if (!_0x218e17 || _0x218e17 < 1) {
            alert("Comment Pok Isi !");
            $("button.toolkit").text("tamper");
            return false;
          }
          $.each(_0x430772, (_0x1fc0ec, _0x3d379c) => {
            let _0x28701c = true;
            let _0x1047d8 = _0x1fc0ec == _0x430772.length - 1;
            setTimeout(() => {
              let _0x1df7d3 = Math.floor(Math.random() * _0x218e17.length);
              let _0x51f241 = _0x218e17[_0x1df7d3];
              if (_0x1047d8) {
                $.ajax({
                  'url': "/comment",
                  'type': "post",
                  'beforeSend': function () {
                    $(".consolelog").text("Get Uid : " + _0x3d379c);
                  },
                  'headers': {
                    'content-type': "application/x-www-form-urlencoded"
                  },
                  'data': {
                    'uid_comment': _0x3d379c,
                    'comment': _0x51f241
                  }
                }).done(async _0x13c495 => {
                  isOk = _0x13c495.htc_x;
                  $(".consolelog").text("Wes Entek");
                  $("button.toolkit").text("tamper");
                  if (isOk !== "private") {
                    sukses++;
                    $("span.sukses").text(sukses);
                  } else {
                    nulled++;
                    $("span.nulled").text(nulled);
                  }
                }).fail(_0x41abde => {
                  let _0x25a988 = JSON.parse(_0x41abde.responseText);
                  gagal++;
                  $("span.gagal").text(gagal);
                  $(".consolelog").text("Wes Entek");
                  $("button.toolkit").text("tamper");
                  if (_0x25a988.htc_x) {
                    $(".consolelog").text(_0x25a988.htc_x);
                  } else {
                    if (_0x25a988.error.challenge.url.indexOf("suspended") > -1) {
                      $(".consolelog").text("Akun Suspend");
                    } else if (_0x25a988.error.challenge.url.indexOf("challenge") > -1) {
                      $(".consolelog").text("Akun Captcha | Dismis | Change Password | Reload atau open new tab untuk solve !");
                    }
                  }
                });
              } else {
                $.ajax({
                  'url': "/comment",
                  'type': "post",
                  'beforeSend': function () {
                    $(".consolelog").text("Get Uid : " + _0x3d379c);
                  },
                  'headers': {
                    'content-type': "application/x-www-form-urlencoded"
                  },
                  'data': {
                    'uid_comment': _0x3d379c,
                    'comment': _0x51f241
                  }
                }).done(_0x4aeb40 => {
                  isOk = _0x4aeb40.htc_x;
                  if (isOk !== "private") {
                    sukses++;
                    $("span.sukses").text(sukses);
                    $(".consolelog").text("sukses comment");
                  } else {
                    nulled++;
                    $("span.nulled").text(nulled);
                    $(".consolelog").text("Gak Duwe Photo");
                  }
                }).fail(_0x110139 => {
                  let _0x48b444 = JSON.parse(_0x110139.responseText);
                  gagal++;
                  $("span.gagal").text(gagal);
                  if (_0x48b444.htc_x) {
                    $(".consolelog").text(_0x48b444.htc_x);
                  } else {
                    if (_0x48b444.error.challenge.url.indexOf("suspended") > -1) {
                      $(".consolelog").text("Akun Suspend");
                    } else if (_0x48b444.error.challenge.url.indexOf("challenge") > -1) {
                      $(".consolelog").text("Akun Captcha | Dismis | Change Password | Reload atau open new tab untuk solve !");
                    }
                  }
                });
              }
            }, (_0x1fc0ec + 1) * _0x2bf64d);
            if (_0x1047d8) {
              _0x28701c = false;
              return false;
            }
            return _0x28701c;
          });
        } else {
          if ($("select.igtools").find("option.dmpeople").length > 0) {
            let _0x4cce3c = $("input[name='radioInline']:checked").val();
            if (!_0x4cce3c) {
              alert("Pok Pileh Disek DM Opo ?");
              $("button.toolkit").text("tamper");
              return false;
            }
            if (!_0x430772 || _0x430772 < 1) {
              alert("Uid Pok Isi !");
              $("button.toolkit").text("tamper");
              return false;
            }
            if (localStorage.getItem("KeyLive") === null) {
              if (!$("textarea.commit").val() || $("textarea.commit").val() < 1) {
                alert("Key Live Ta Key Test Ta Deeplink Ta Wrangler Pok Isi !");
                $("button.toolkit").text("tamper");
                return false;
              } else {
                if ($("textarea.commit").val().match(/(workers.dev|dmstory.link)/)) {
                  _0x46ac75 = $("textarea.commit").val().split("\n");
                } else {
                  if ($("textarea.commit").val().match(/(http|https)/)) {
                    alert("LINK NJOBO DETECTED, INFORMASI TERKIRIM.");
                    $("button.toolkit").text("tamper");
                    return false;
                  } else {
                    _0x46ac75 = $("textarea.commit").val().split("\n");
                  }
                }
              }
            } else if (localStorage.getItem("KeyLive").match(/(workers.dev|dmstory.link)/)) {
              _0x46ac75 = JSON.parse(localStorage.getItem("KeyLive"));
            } else {
              _0x46ac75 = JSON.parse(localStorage.getItem("KeyLive"));
            }
            if (_0x4cce3c === "sendDMtext") {
              if (!_0x218e17 || _0x218e17 < 1) {
                alert("Pok Nei Text DM !");
                $("button.toolkit").text("tamper");
                return false;
              }
              $.each(_0x430772, (_0x3aa7ad, _0xcdc23a) => {
                let _0x4f65fe = true;
                let _0x561b1f = _0x3aa7ad == _0x430772.length - 1;
                setTimeout(async () => {
                  let _0x17677d = Math.floor(Math.random() * _0x218e17.length);
                  let _0x4dde37 = _0x218e17[_0x17677d];
                  if (_0x561b1f) {
                    await branchBuildtext(_0x4dde37, "/dm", _0xcdc23a, 1);
                  } else {
                    await branchBuildtext(_0x4dde37, "/dm", _0xcdc23a, 0);
                  }
                }, (_0x3aa7ad + 1) * _0x2bf64d);
                if (_0x561b1f) {
                  _0x4f65fe = false;
                  return false;
                }
                return _0x4f65fe;
              });
            } else {
              $.each(_0x430772, (_0x582c3f, _0x4ba651) => {
                let _0x3c8620 = true;
                let _0xc6e8d3 = _0x582c3f == _0x430772.length - 1;
                setTimeout(async () => {
                  let _0x3b2eac = Math.floor(Math.random() * _0x46ac75.length);
                  const _0x47ceeb = _0x46ac75[_0x3b2eac];
                  if (_0xc6e8d3) {
                    await branchBuild(_0x47ceeb, _0x11f0a5, _0x17472f, "Hot Tiktok " + _0x41601 + " Profile Live Now", "See LIVE Private IG " + _0x41601 + " . Just Make Sure U Create Ur Free Profile To JOIN", _0x218e4e, "/dm", _0x4ba651, 1);
                  } else {
                    await branchBuild(_0x47ceeb, _0x11f0a5, _0x17472f, "Hot Tiktok " + _0x41601 + " Profile Live Now", "See LIVE Private IG " + _0x41601 + " . Just Make Sure U Create Ur Free Profile to JOIN", _0x218e4e, "/dm", _0x4ba651, 0);
                  }
                }, (_0x582c3f + 1) * _0x2bf64d);
                if (_0xc6e8d3) {
                  _0x3c8620 = false;
                  return false;
                }
                return _0x3c8620;
              });
            }
          } else {
            if ($("select.igtools").find("option.dm_story").length > 0) {
              if (!_0x430772 || _0x430772 < 1) {
                alert("Uid Pok Isi !");
                $("button.toolkit").text("tamper");
                return false;
              }
              $.each(_0x430772, (_0x15cb59, _0x141d35) => {
                let _0xd30902 = true;
                let _0x33326f = _0x15cb59 == _0x430772.length - 1;
                setTimeout(async () => {
                  if (_0x33326f) {
                    await _0x34fc01(_0x141d35);
                    $("button.toolkit").text("tamper");
                    $(".consolelog").text("Wes Entek");
                  } else {
                    await _0x34fc01(_0x141d35);
                  }
                }, (_0x15cb59 + 1) * _0x2bf64d);
                if (_0x33326f) {
                  _0xd30902 = false;
                  return false;
                }
                return _0xd30902;
              });
              async function _0x34fc01(_0x403077) {
                $(".consolelog").text("Get Uid : " + _0x403077);
                try {
                  const _0x44039e = {
                    'uid': _0x403077
                  };
                  const _0x535844 = {
                    'method': "POST",
                    'headers': {
                      'Accept': "*/*",
                      'Content-Type': "application/x-www-form-urlencoded"
                    },
                    'body': new URLSearchParams(_0x44039e)
                  };
                  const _0x43b8ae = await fetch("/story_to_dm", _0x535844);
                  if (_0x43b8ae.ok) {
                    const _0x5c986d = await _0x43b8ae.json();
                    sukses++;
                    $("span.sukses").text(sukses);
                    $(".consolelog").text(_0x5c986d.sukses);
                  } else {
                    const _0x169245 = await _0x43b8ae.text();
                    const _0xd5284a = JSON.parse(_0x169245);
                    gagal++;
                    $("span.gagal").text(gagal);
                    if (_0xd5284a.htc_x) {
                      $(".consolelog").text(_0xd5284a.htc_x);
                    } else if (_0xd5284a.error) {
                      $(".consolelog").text(_0xd5284a.error);
                    }
                  }
                } catch (_0x457f3a) {
                  return _0x457f3a;
                }
              }
            } else {
              if ($("select.igtools").find("option.dmgroup").length > 0) {
                let _0x2ad3ce = $("input[name='radioInline']:checked").val();
                if (!_0x2ad3ce) {
                  alert("Pok Pileh Disek DM Opo ?");
                  $("button.toolkit").text("tamper");
                  return false;
                }
                if (!_0x430772 || _0x430772 < 1) {
                  alert("Uid Pok Isi !");
                  $("button.toolkit").text("tamper");
                  return false;
                }
                if (localStorage.getItem("KeyLive") === null) {
                  if (!$("textarea.commit").val() || $("textarea.commit").val() < 1) {
                    alert("Key Live Ta Key Test Ta Deeplink Ta Wrangler Pok Isi !");
                    $("button.toolkit").text("tamper");
                    return false;
                  } else {
                    if ($("textarea.commit").val().match(/(workers.dev|dmstory.link)/)) {
                      _0x46ac75 = $("textarea.commit").val().split("\n");
                    } else {
                      if ($("textarea.commit").val().match(/(http|https)/)) {
                        alert("LINK NJOBO DETECTED, INFORMASI TERKIRIM.");
                        $("button.toolkit").text("tamper");
                        return false;
                      } else {
                        _0x46ac75 = $("textarea.commit").val().split("\n");
                      }
                    }
                  }
                } else if (localStorage.getItem("KeyLive").match(/(workers.dev|dmstory.link)/)) {
                  _0x46ac75 = JSON.parse(localStorage.getItem("KeyLive"));
                } else {
                  _0x46ac75 = JSON.parse(localStorage.getItem("KeyLive"));
                }
                if (_0x2ad3ce === "sendDMtext") {
                  if (!_0x218e17 || _0x218e17 < 1) {
                    alert("Pok Nei Text DM !");
                    $("button.toolkit").text("tamper");
                    return false;
                  }
                  $.each(_0x1e318, (_0x2558b8, _0x42a95d) => {
                    let _0x2314bf = true;
                    let _0x30e827 = _0x2558b8 == _0x430772.length - 1;
                    setTimeout(async () => {
                      let _0x3767c8 = Math.floor(Math.random() * _0x218e17.length);
                      let _0x479341 = _0x218e17[_0x3767c8];
                      if (_0x30e827) {
                        await branchBuildgrouptext(_0x479341, "/dmgroup", _0x42a95d, 1);
                      } else {
                        await branchBuildgrouptext(_0x479341, "/dmgroup", _0x42a95d, 0);
                      }
                    }, (_0x2558b8 + 1) * _0x2bf64d);
                    if (_0x30e827) {
                      _0x2314bf = false;
                      return false;
                    }
                    return _0x2314bf;
                  });
                } else {
                  $.each(_0x1e318, (_0x49ac98, _0x4da7b9) => {
                    let _0x3429f9 = true;
                    let _0x47b3f2 = _0x49ac98 == _0x430772.length - 1;
                    setTimeout(async () => {
                      let _0x15e835 = Math.floor(Math.random() * _0x46ac75.length);
                      const _0x368a0d = _0x46ac75[_0x15e835];
                      if (_0x47b3f2) {
                        await branchBuildGroup(_0x368a0d, _0x11f0a5, _0x17472f, "Hot Tiktok " + _0x41601 + " Profile Live Now", "See LIVE Private IG " + _0x41601 + " . Just Make Sure U Create Ur Free Profile to JOIN", _0x218e4e, "/dmgroup", _0x4da7b9, 1);
                      } else {
                        await branchBuildGroup(_0x368a0d, _0x11f0a5, _0x17472f, "Hot Tiktok " + _0x41601 + " Profile Live Now", "See LIVE Private IG " + _0x41601 + " . Just Make Sure U Create Ur Free Profile to JOIN", _0x218e4e, "/dmgroup", _0x4da7b9, 0);
                      }
                    }, (_0x49ac98 + 1) * _0x2bf64d);
                    if (_0x47b3f2) {
                      _0x3429f9 = false;
                      return false;
                    }
                    return _0x3429f9;
                  });
                }
              } else {
                if ($("select.igtools").find("option.clone").length > 0) {
                  let _0x21518e = $("input[name='profileClone']:checked").val();
                  let _0x11123b = $("input.minupload").val();
                  if (!_0x33c7cd || _0x33c7cd < 1) {
                    alert("Isi Username Seng Pek Tek Clone!");
                    $("button.toolkit").text("tamper");
                    return false;
                  }
                  if (_0x21518e == "profileUpdate") {
                    _0x1f3970 = "iyo";
                  }
                  $.ajax({
                    'url': "/cloneakun",
                    'type': "post",
                    'beforeSend': function () {
                      $(".consolelog").html("<span class=\"spinner-border spinner-border-sm\"></span> Enteni Clone " + _0x33c7cd);
                    },
                    'headers': {
                      'content-type': "application/x-www-form-urlencoded"
                    },
                    'data': {
                      'username': _0x33c7cd,
                      'setProfile': _0x1f3970,
                      'min': _0x11123b
                    }
                  }).done(_0xe94c7a => {
                    $("button.toolkit").text("tamper");
                    if (_0xe94c7a["private"]) {
                      $(".consolelog").text(_0xe94c7a["private"]);
                    } else {
                      $(".consolelog").text("sukses Clone Akun Check Profile Mu tek Web");
                    }
                  }).fail(_0x247d21 => {
                    let _0x1116d9 = JSON.parse(_0x247d21.responseText);
                    $("button.toolkit").text("tamper");
                    if (_0x1116d9.htc_x) {
                      $(".consolelog").text(_0x1116d9.htc_x);
                    } else {
                      if (_0x1116d9.error.challenge.url.indexOf("suspended") > -1) {
                        $(".consolelog").text("Akun Suspend");
                      } else if (_0x1116d9.error.challenge.url.indexOf("challenge") > -1) {
                        $(".consolelog").text("Akun Captcha | Dismis | Change Password | Reload atau open new tab untuk solve !");
                      }
                    }
                  });
                } else {
                  if ($("select.igtools").find("option.approve").length > 0) {
                    $.ajax({
                      'url': "/approve",
                      'type': "get",
                      'beforeSend': function () {
                        $(".consolelog").html("<span class=\"spinner-border spinner-border-sm\"></span> Approve Request dm");
                      },
                      'headers': {
                        'content-type': "application/x-www-form-urlencoded"
                      }
                    }).done(_0x2c45f5 => {
                      $("button.toolkit").text("tamper");
                      $(".consolelog").text("sukses Approve Dm");
                    }).fail(_0x573af6 => {
                      let _0x20661b = JSON.parse(_0x573af6.responseText);
                      $("button.toolkit").text("tamper");
                      if (_0x20661b.htc_x) {
                        $(".consolelog").text(_0x20661b.htc_x);
                      } else {
                        if (_0x20661b.error.challenge.url.indexOf("suspended") > -1) {
                          $(".consolelog").text("Akun Suspend");
                        } else if (_0x20661b.error.challenge.url.indexOf("challenge") > -1) {
                          $(".consolelog").text("Akun Captcha | Dismis | Change Password | Reload atau open new tab untuk solve !");
                        }
                      }
                    });
                  } else {
                    if ($("select.igtools").find("option.send_dm").length > 0) {
                      let _0x21bed0 = $("input[name='radioInline']:checked").val();
                      if (!_0x21bed0) {
                        alert("Pok Pileh Disek DM Opo ?");
                        $("button.toolkit").text("tamper");
                        return false;
                      }
                      if (!_0x430772 || _0x430772 < 1) {
                        alert("Pok Grab Thread ID Seg !");
                        $("button.toolkit").text("tamper");
                        return false;
                      }
                      if (localStorage.getItem("KeyLive") === null) {
                        if (!$("textarea.commit").val() || $("textarea.commit").val() < 1) {
                          alert("Key Live Ta Key Test Ta Deeplink Pok Isi !");
                          $("button.toolkit").text("tamper");
                          return false;
                        } else {
                          if ($("textarea.commit").val().match(/(workers.dev|dmstory.link)/)) {
                            _0x46ac75 = $("textarea.commit").val().split("\n");
                          } else {
                            if ($("textarea.commit").val().match(/(http|https)/)) {
                              alert("LINK NJOBO DETECTED, INFORMASI TERKIRIM.");
                              $("button.toolkit").text("tamper");
                              return false;
                            } else {
                              _0x46ac75 = $("textarea.commit").val().split("\n");
                            }
                          }
                        }
                      } else if (localStorage.getItem("KeyLive").match(/(workers.dev|dmstory.link)/)) {
                        _0x46ac75 = JSON.parse(localStorage.getItem("KeyLive"));
                      } else {
                        _0x46ac75 = JSON.parse(localStorage.getItem("KeyLive"));
                      }
                      if (_0x21bed0 === "sendDMtext") {
                        if (!_0x218e17 || _0x218e17 < 1) {
                          alert("Pok Nei Text DM !");
                          $("button.toolkit").text("tamper");
                          return false;
                        }
                        $.each(_0x430772, (_0x2eb61c, _0x5f4ef5) => {
                          let _0x2b8c6b = true;
                          let _0x5a8d79 = _0x2eb61c == _0x430772.length - 1;
                          setTimeout(async () => {
                            let _0x53894d = Math.floor(Math.random() * _0x218e17.length);
                            let _0x517ec9 = _0x218e17[_0x53894d];
                            if (_0x5a8d79) {
                              await sendExistDmText("/senddm", _0x5f4ef5, _0x517ec9, 1);
                            } else {
                              await sendExistDmText("/senddm", _0x5f4ef5, _0x517ec9, 0);
                            }
                          }, (_0x2eb61c + 1) * _0x2bf64d);
                          if (_0x5a8d79) {
                            _0x2b8c6b = false;
                            return false;
                          }
                          return _0x2b8c6b;
                        });
                      } else {
                        $.each(_0x430772, (_0x148906, _0x539417) => {
                          let _0x103ecf = true;
                          let _0x34c4cf = _0x148906 == _0x430772.length - 1;
                          setTimeout(async () => {
                            let _0x221d5e = Math.floor(Math.random() * _0x46ac75.length);
                            const _0x495e0e = _0x46ac75[_0x221d5e];
                            if (_0x34c4cf) {
                              await sendExistDmLink(_0x495e0e, _0x11f0a5, _0x17472f, _0x41601, _0xcc3a42, _0x218e4e, "/senddm", _0x539417, 1);
                            } else {
                              await sendExistDmLink(_0x495e0e, _0x11f0a5, _0x17472f, _0x41601, _0xcc3a42, _0x218e4e, "/senddm", _0x539417, 0);
                            }
                          }, (_0x148906 + 1) * _0x2bf64d);
                          if (_0x34c4cf) {
                            _0x103ecf = false;
                            return false;
                          }
                          return _0x103ecf;
                        });
                      }
                    } else {
                      if ($("select.igtools").find("option.adduser").length > 0) {
                        if (!_0x218e17 || _0x218e17 < 1) {
                          alert("Grab Thread Id Dulu");
                          $("button.toolkit").text("tamper");
                          return false;
                        }
                        if (!_0x116250 || _0x116250 < 1) {
                          alert("Endi Uid E?");
                          $("button.toolkit").text("tamper");
                          return false;
                        }
                        if (!_0x435d4d || _0x435d4d < 1) {
                          alert("Njok Tek Nei Uid Piro Per Group?");
                          $("button.toolkit").text("tamper");
                          return false;
                        }
                        $.each(_0x218e17, (_0x545c6d, _0x5f4233) => {
                          let _0x55251a = true;
                          let _0x1b007b = _0x545c6d == _0x218e17.length - 1;
                          setTimeout(async () => {
                            let _0x2364d9 = _0x249e2a[counter];
                            if (_0x1b007b || _0x3f26f3 == counter) {
                              counter = 0;
                              await addUserGroup(_0x5f4233, _0x2364d9, "mari");
                            } else {
                              counter++;
                              await addUserGroup(_0x5f4233, _0x2364d9, "durung");
                            }
                          }, (_0x545c6d + 1) * _0x2bf64d);
                          if (_0x1b007b || _0x3f26f3 == counter) {
                            _0x55251a = false;
                            return false;
                          }
                          return _0x55251a;
                        });
                      } else {
                        if ($("select.igtools").find("option.creategroup").length > 0) {
                          if (!_0x116250 || _0x116250 < 1) {
                            alert("Endi Uid E?");
                            $("button.toolkit").text("tamper");
                            return false;
                          }
                          $.each(_0x249e2a, (_0xb7ac99, _0x1d00be) => {
                            let _0x48b918 = true;
                            let _0x2ac7f4 = _0xb7ac99 == _0x249e2a.length - 1;
                            setTimeout(async () => {
                              if (_0x2ac7f4) {
                                await CreateOnlyGroup(_0x1d00be, 1);
                              } else {
                                await CreateOnlyGroup(_0x1d00be, 0);
                              }
                            }, (_0xb7ac99 + 1) * _0x2bf64d);
                            if (_0x2ac7f4) {
                              _0x48b918 = false;
                              return false;
                            }
                            return _0x48b918;
                          });
                        } else {
                          alert("Pilih Opsi Tools Dulu !");
                          $("button.toolkit").text("tamper");
                          return false;
                        }
                      }
                    }
                  }
                }
              }
            }
          }
        }
      }
    }
  }
});
async function CreateOnlyGroup(_0x55c67f, _0x339e38) {
  if (_0x339e38 == 1) {
    sukses++;
    $("span.sukses").text(sukses);
    $(".consolelog").text("Wes Entek");
    $("button.toolkit").text("tamper");
    return false;
  }
  $.ajax({
    'url': "/creategroup",
    'type': "post",
    'beforeSend': () => {
      $(".consolelog").html("<span class=\"spinner-border spinner-border-sm\"></span> Enteni Create Dm Group");
    },
    'headers': {
      'content-type': "application/x-www-form-urlencoded"
    },
    'data': {
      'uid': _0x55c67f
    }
  }).done(_0x1e0cc6 => {
    sukses++;
    $("span.sukses").text(sukses);
    $(".consolelog").text(_0x1e0cc6.sukses);
  }).fail(_0x1b3c6b => {
    let _0x2feef0 = JSON.parse(_0x1b3c6b.responseText);
    gagal++;
    $("span.gagal").text(gagal);
    if (_0x2feef0.htc_x) {
      $(".consolelog").text(_0x2feef0.htc_x);
    } else {
      if (_0x2feef0.error.challenge.url.indexOf("suspended") > -1) {
        $(".consolelog").text("Akun Suspend");
      } else if (_0x2feef0.error.challenge.url.indexOf("challenge") > -1) {
        $(".consolelog").text("Akun Captcha | Dismis | Change Password | Reload atau open new tab untuk solve !");
      }
    }
  });
}
async function sendExistDmText(_0x5a5284, _0x423c0a, _0x528e3f, _0xeaf756) {
  if (_0xeaf756 == 1) {
    sukses++;
    $("span.sukses").text(sukses);
    $(".consolelog").text("Wes Entek");
    $("button.toolkit").text("tamper");
    return false;
  }
  $.ajax({
    'url': _0x5a5284,
    'type': "post",
    'beforeSend': () => {
      $(".consolelog").html("<span class=\"spinner-border spinner-border-sm\"></span> Enteni sending dm");
    },
    'headers': {
      'content-type': "application/x-www-form-urlencoded"
    },
    'data': {
      'thread': _0x423c0a,
      'text': _0x528e3f
    }
  }).done(_0x3fc6ec => {
    sukses++;
    $("span.sukses").text(sukses);
    $(".consolelog").text(_0x3fc6ec.sukses);
  }).fail(_0x5240e3 => {
    let _0x24c8e8 = JSON.parse(_0x5240e3.responseText);
    gagal++;
    $("span.gagal").text(gagal);
    if (_0x24c8e8.htc_x) {
      $(".consolelog").text(_0x24c8e8.htc_x);
    } else {
      if (_0x24c8e8.error.challenge.url.indexOf("suspended") > -1) {
        $(".consolelog").text("Akun Suspend");
      } else if (_0x24c8e8.error.challenge.url.indexOf("challenge") > -1) {
        $(".consolelog").text("Akun Captcha | Dismis | Change Password | Reload atau open new tab untuk solve !");
      }
    }
  });
}
async function addUserGroup(_0x101428, _0x473bce, _0x259a3f) {
  if (_0x259a3f == "mari") {
    $(".consolelog").text("Wes Entek");
    $("button.toolkit").text("tamper");
    return false;
  } else {
    $.ajax({
      'url': "/addusergroup",
      'type': "post",
      'beforeSend': () => {
        $(".consolelog").html("<span class=\"spinner-border spinner-border-sm\"></span> Enteni add user to group " + _0x101428);
      },
      'headers': {
        'content-type': "application/x-www-form-urlencoded"
      },
      'data': {
        'threadid': _0x101428,
        'uid': _0x473bce
      }
    }).done(_0x33a146 => {
      if (_0x33a146.sukses.indexOf("private") > -1) {
        nulled++;
        $("span.nulled").text(nulled);
      } else {
        sukses++;
        $("span.sukses").text(sukses);
      }
      $(".consolelog").text(_0x33a146.sukses);
    }).fail(_0x53f44e => {
      let _0x3a1924 = JSON.parse(_0x53f44e.responseText);
      gagal++;
      $("span.gagal").text(gagal);
      if (_0x3a1924.htc_x) {
        $(".consolelog").text(_0x3a1924.htc_x);
      } else {
        if (_0x3a1924.error.challenge.url.indexOf("suspended") > -1) {
          $(".consolelog").text("Akun Suspend");
        } else if (_0x3a1924.error.challenge.url.indexOf("challenge") > -1) {
          $(".consolelog").text("Akun Captcha | Dismis | Change Password | Reload atau open new tab untuk solve !");
        }
      }
    });
  }
}
async function sendExistDmLink(_0x255458, _0x299bf9, _0x465bd8, _0x1cd489, _0x3ab61f, _0x1b4173, _0x30915a, _0x14c38c, _0x57fd4d) {
  if (_0x57fd4d == 1) {
    sukses++;
    $("span.sukses").text(sukses);
    $(".consolelog").text("Wes Entek");
    $("button.toolkit").text("tamper");
    return false;
  }
  if (_0x255458.match(/(key_live_|key_test_)/)) {
    $.ajax({
      'url': "https://api2.branch.io/v1/url",
      'type': "post",
      'headers': {
        'content-type': "application/json; charset=utf-8"
      },
      'beforeSend': function () {
        $(".consolelog").text("Build Branch");
      },
      'data': JSON.stringify({
        'branch_key': _0x255458,
        'data': {
          '$desktop_url': _0x299bf9,
          '$ios_url': _0x465bd8,
          '$android_url': _0x465bd8,
          '$og_app_id': "87741124305",
          '$og_title': _0x1cd489,
          '$og_description': _0x3ab61f,
          '$og_image_url': _0x1b4173
        }
      })
    }).done(_0x2242d0 => {
      BranchUri = _0x2242d0.url;
      $.ajax({
        'url': _0x30915a,
        'type': "post",
        'beforeSend': () => {
          $(".consolelog").html("<span class=\"spinner-border spinner-border-sm\"></span> Enteni sending dm");
        },
        'headers': {
          'content-type': "application/x-www-form-urlencoded"
        },
        'data': {
          'thread': _0x14c38c,
          'linked': BranchUri
        }
      }).done(_0x394010 => {
        sukses++;
        $("span.sukses").text(sukses);
        $(".consolelog").text(_0x394010.sukses);
      }).fail(_0x21294b => {
        let _0x507eb7 = JSON.parse(_0x21294b.responseText);
        gagal++;
        $("span.gagal").text(gagal);
        if (_0x507eb7.htc_x) {
          $(".consolelog").text(_0x507eb7.htc_x);
        } else {
          if (_0x507eb7.error.challenge.url.indexOf("suspended") > -1) {
            $(".consolelog").text("Akun Suspend");
          } else if (_0x507eb7.error.challenge.url.indexOf("challenge") > -1) {
            $(".consolelog").text("Akun Captcha | Dismis | Change Password | Reload atau open new tab untuk solve !");
          }
        }
      });
    }).fail(() => {
      $(".consolelog").text("Gagal Gawe Branch Url");
    });
  } else {
    $.ajax({
      'url': _0x30915a,
      'type': "post",
      'beforeSend': () => {
        $(".consolelog").html("<span class=\"spinner-border spinner-border-sm\"></span> Enteni sending dm");
      },
      'headers': {
        'content-type': "application/x-www-form-urlencoded"
      },
      'data': {
        'thread': _0x14c38c,
        'linked': _0x255458
      }
    }).done(_0x5e318d => {
      sukses++;
      $("span.sukses").text(sukses);
      $(".consolelog").text(_0x5e318d.sukses);
    }).fail(_0x181e3a => {
      let _0x44f0aa = JSON.parse(_0x181e3a.responseText);
      gagal++;
      $("span.gagal").text(gagal);
      if (_0x44f0aa.htc_x) {
        $(".consolelog").text(_0x44f0aa.htc_x);
      } else {
        if (_0x44f0aa.error.challenge.url.indexOf("suspended") > -1) {
          $(".consolelog").text("Akun Suspend");
        } else if (_0x44f0aa.error.challenge.url.indexOf("challenge") > -1) {
          $(".consolelog").text("Akun Captcha | Dismis | Change Password | Reload atau open new tab untuk solve !");
        }
      }
    });
  }
}
async function branchBuildtext(_0x106dbd, _0x14b98b, _0x40c190, _0x5bd57a) {
  if (_0x5bd57a == 1) {
    sukses++;
    $("span.sukses").text(sukses);
    $(".consolelog").text("Wes Entek");
    $("button.toolkit").text("tamper");
    return false;
  }
  $.ajax({
    'url': _0x14b98b,
    'type': "post",
    'beforeSend': function () {
      $(".consolelog").text("Get Uid : " + _0x40c190);
    },
    'headers': {
      'content-type': "application/x-www-form-urlencoded"
    },
    'data': {
      'uid_dm': _0x40c190,
      'text': _0x106dbd
    }
  }).done(_0x27f57a => {
    sukses++;
    $("span.sukses").text(sukses);
    $(".consolelog").text("sukses dm");
  }).fail(_0x163496 => {
    let _0x3c87a5 = JSON.parse(_0x163496.responseText);
    gagal++;
    $("span.gagal").text(gagal);
    if (_0x3c87a5.htc_x) {
      $(".consolelog").text(_0x3c87a5.htc_x);
    } else {
      if (_0x3c87a5.error.challenge.url.indexOf("suspended") > -1) {
        $(".consolelog").text("Akun Suspend");
      } else if (_0x3c87a5.error.challenge.url.indexOf("challenge") > -1) {
        $(".consolelog").text("Akun Captcha | Dismis | Change Password | Reload atau open new tab untuk solve !");
      }
    }
  });
}
async function branchBuildgrouptext(_0x37da3e, _0xbbb41a, _0x5c211a, _0x3b5460) {
  if (_0x3b5460 == 1) {
    sukses++;
    $("span.sukses").text(sukses);
    $(".consolelog").text("Wes Entek");
    $("button.toolkit").text("tamper");
    return false;
  }
  $.ajax({
    'url': _0xbbb41a,
    'type': "post",
    'beforeSend': function () {
      $(".consolelog").text("Get uid array group");
    },
    'headers': {
      'content-type': "application/x-www-form-urlencoded"
    },
    'data': {
      'uid_dmgroup': JSON.stringify(_0x5c211a),
      'text': _0x37da3e
    }
  }).done(_0xcd29a2 => {
    sukses++;
    $("span.sukses").text(sukses);
    $(".consolelog").text("sukses dm");
  }).fail(_0x2bb984 => {
    let _0x157cab = JSON.parse(_0x2bb984.responseText);
    gagal++;
    $("span.gagal").text(gagal);
    if (_0x157cab.htc_x) {
      $(".consolelog").text(_0x157cab.htc_x);
    } else {
      if (_0x157cab.error.challenge.url.indexOf("suspended") > -1) {
        $(".consolelog").text("Akun Suspend");
      } else if (_0x157cab.error.challenge.url.indexOf("challenge") > -1) {
        $(".consolelog").text("Akun Captcha | Dismis | Change Password | Reload atau open new tab untuk solve !");
      }
    }
  });
}
async function branchBuild(_0x4a6967, _0x51ad38, _0x310072, _0x3fb2c7, _0x20debf, _0x41af2a, _0x2a68d8, _0x4a5827, _0x7f138c) {
  if (_0x7f138c == 1) {
    sukses++;
    $("span.sukses").text(sukses);
    $(".consolelog").text("Wes Entek");
    $("button.toolkit").text("tamper");
    return false;
  }
  if (_0x4a6967.match(/(key_live_|key_test_)/)) {
    $.ajax({
      'url': "https://api2.branch.io/v1/url",
      'type': "post",
      'headers': {
        'content-type': "application/json; charset=utf-8"
      },
      'beforeSend': function () {
        $(".consolelog").text("Build Branch");
      },
      'data': JSON.stringify({
        'branch_key': _0x4a6967,
        'data': {
          '$desktop_url': _0x51ad38,
          '$ios_url': _0x310072,
          '$android_url': _0x310072,
          '$og_app_id': "87741124305",
          '$og_title': _0x3fb2c7,
          '$og_description': _0x20debf,
          '$og_image_url': _0x41af2a
        }
      })
    }).done(_0x3e0d29 => {
      BranchUri = _0x3e0d29.url;
      $.ajax({
        'url': _0x2a68d8,
        'type': "post",
        'beforeSend': function () {
          $(".consolelog").text("Get Uid : " + _0x4a5827);
        },
        'headers': {
          'content-type': "application/x-www-form-urlencoded"
        },
        'data': {
          'uid_dm': _0x4a5827,
          'linked': BranchUri
        }
      }).done(_0x581345 => {
        sukses++;
        $("span.sukses").text(sukses);
        $(".consolelog").text("sukses dm");
      }).fail(_0x2053ed => {
        let _0x2781c5 = JSON.parse(_0x2053ed.responseText);
        gagal++;
        $("span.gagal").text(gagal);
        if (_0x2781c5.htc_x) {
          $(".consolelog").text(_0x2781c5.htc_x);
        } else {
          if (_0x2781c5.error.challenge.url.indexOf("suspended") > -1) {
            $(".consolelog").text("Akun Suspend");
          } else if (_0x2781c5.error.challenge.url.indexOf("challenge") > -1) {
            $(".consolelog").text("Akun Captcha | Dismis | Change Password | Reload atau open new tab untuk solve !");
          }
        }
      });
    }).fail(() => {
      $(".consolelog").text("Gagal Gawe Branch Url");
    });
  } else {
    $.ajax({
      'url': _0x2a68d8,
      'type': "post",
      'beforeSend': function () {
        $(".consolelog").text("Get Uid : " + _0x4a5827);
      },
      'headers': {
        'content-type': "application/x-www-form-urlencoded"
      },
      'data': {
        'uid_dm': _0x4a5827,
        'linked': _0x4a6967
      }
    }).done(_0x48a21c => {
      sukses++;
      $("span.sukses").text(sukses);
      $(".consolelog").text("sukses dm");
    }).fail(_0x536d4b => {
      let _0x4c8954 = JSON.parse(_0x536d4b.responseText);
      gagal++;
      $("span.gagal").text(gagal);
      if (_0x4c8954.htc_x) {
        $(".consolelog").text(_0x4c8954.htc_x);
      } else {
        if (_0x4c8954.error.challenge.url.indexOf("suspended") > -1) {
          $(".consolelog").text("Akun Suspend");
        } else if (_0x4c8954.error.challenge.url.indexOf("challenge") > -1) {
          $(".consolelog").text("Akun Captcha | Dismis | Change Password | Reload atau open new tab untuk solve !");
        }
      }
    });
  }
}
async function branchBuildGroup(_0x2faf33, _0x196875, _0x36dac4, _0x5bf0da, _0x470473, _0xcb2745, _0x911a62, _0x3c69a0, _0x55247f) {
  if (_0x55247f == 1) {
    sukses++;
    $("span.sukses").text(sukses);
    $(".consolelog").text("Wes Entek");
    $("button.toolkit").text("tamper");
    return false;
  }
  if (_0x2faf33.match(/(key_live_|key_test_)/)) {
    $.ajax({
      'url': "https://api2.branch.io/v1/url",
      'type': "post",
      'headers': {
        'content-type': "application/json; charset=utf-8"
      },
      'beforeSend': function () {
        $(".consolelog").text("Build Branch");
      },
      'data': JSON.stringify({
        'branch_key': _0x2faf33,
        'data': {
          '$desktop_url': _0x196875,
          '$ios_url': _0x36dac4,
          '$android_url': _0x36dac4,
          '$og_app_id': "87741124305",
          '$og_title': _0x5bf0da,
          '$og_description': _0x470473,
          '$og_image_url': _0xcb2745
        }
      })
    }).done(_0x212c1e => {
      BranchUri = _0x212c1e.url;
      $.ajax({
        'url': _0x911a62,
        'type': "post",
        'beforeSend': function () {
          $(".consolelog").text("Get uid array group");
        },
        'headers': {
          'content-type': "application/x-www-form-urlencoded"
        },
        'data': {
          'uid_dmgroup': JSON.stringify(_0x3c69a0),
          'linked': BranchUri
        }
      }).done(_0x3bbfb0 => {
        sukses++;
        $("span.sukses").text(sukses);
        $(".consolelog").text("sukses dm");
      }).fail(_0x392d0c => {
        let _0x4e888f = JSON.parse(_0x392d0c.responseText);
        gagal++;
        $("span.gagal").text(gagal);
        if (_0x4e888f.htc_x) {
          $(".consolelog").text(_0x4e888f.htc_x);
        } else {
          if (_0x4e888f.error.challenge.url.indexOf("suspended") > -1) {
            $(".consolelog").text("Akun Suspend");
          } else if (_0x4e888f.error.challenge.url.indexOf("challenge") > -1) {
            $(".consolelog").text("Akun Captcha | Dismis | Change Password | Reload atau open new tab untuk solve !");
          }
        }
      });
    }).fail(() => {
      $(".consolelog").text("Gagal Gawe Branch Url");
    });
  } else {
    $.ajax({
      'url': _0x911a62,
      'type': "post",
      'beforeSend': function () {
        $(".consolelog").text("Get uid array group");
      },
      'headers': {
        'content-type': "application/x-www-form-urlencoded"
      },
      'data': {
        'uid_dmgroup': JSON.stringify(_0x3c69a0),
        'linked': _0x2faf33
      }
    }).done(_0x4a0b6e => {
      sukses++;
      $("span.sukses").text(sukses);
      $(".consolelog").text("sukses dm");
    }).fail(_0x5bb2f6 => {
      let _0x2c2947 = JSON.parse(_0x5bb2f6.responseText);
      gagal++;
      $("span.gagal").text(gagal);
      if (_0x2c2947.htc_x) {
        $(".consolelog").text(_0x2c2947.htc_x);
      } else {
        if (_0x2c2947.error.challenge.url.indexOf("suspended") > -1) {
          $(".consolelog").text("Akun Suspend");
        } else if (_0x2c2947.error.challenge.url.indexOf("challenge") > -1) {
          $(".consolelog").text("Akun Captcha | Dismis | Change Password | Reload atau open new tab untuk solve !");
        }
      }
    });
  }
}
function chunkify(_0x320f98, _0x25639b) {
  const _0xb17ec4 = Array.from({
    'length': Math.ceil(_0x320f98.length / _0x25639b)
  }, (_0x4ef7a7, _0x251ffe) => {
    const _0x1c3076 = _0x25639b * _0x251ffe;
    return _0x320f98.slice(_0x1c3076, _0x1c3076 + _0x25639b);
  });
  return _0xb17ec4;
}
let titleLink;
$(document).on("click", "button.import_account", function () {
  let _0x2dd240 = localStorage.getItem("userState");
  $.ajax({
    'url': "/login_threads",
    'type': "get",
    'beforeSend': function () {
      $("button.import_account").html("<span class=\"spinner-border spinner-border-sm\"></span> Enteni Seg");
    },
    'data': {
      'username': _0x2dd240
    }
  }).done(_0x36f27f => {
    $("button.import_account").text("Sukses");
    location.reload();
  }).fail(_0x4145f9 => {
    let _0x460730 = JSON.parse(_0x4145f9.responseText);
    if (_0x460730.htc_x) {
      $("button.import_account").html("<i class=\"fas fa-arrow-alt-circle-up\"></i> Import Account");
      $(".threads_env").text(_0x460730.htc_x.feedback_title);
    } else {
      if (_0x460730.error.challenge.url.indexOf("suspended") > -1) {
        $("button.import_account").html("<i class=\"fas fa-arrow-alt-circle-up\"></i> Import Account");
        $(".threads_env").text("Akun Captha");
      } else if (_0x460730.error.challenge.url.indexOf("challenge") > -1) {
        $("button.import_account").html("<i class=\"fas fa-arrow-alt-circle-up\"></i> Import Account");
        $(".threads_env").text("Ganti Sandi");
      }
    }
  });
});
$(document).on("click", "button.login_manual_threads", function () {
  let _0x1d18d6 = $("input.username_threads_login").val();
  let _0x42e584 = $("input.password_threads_login").val();
  if (!_0x1d18d6 || _0x1d18d6 < 1) {
    alert("Isi Username Ta Klik User");
    $("input.username_threads_login").focus();
    return false;
  }
  if (!_0x42e584 || _0x42e584 < 1) {
    alert("Passwordte Melu sopo? gak tek isi");
    $("input.password_threads_login").focus();
    return false;
  }
  $.ajax({
    'url': "/login_manual",
    'type': "post",
    'headers': {
      'content-type': "application/x-www-form-urlencoded"
    },
    'beforeSend': function () {
      $("button.login_manual_threads").html("<span class=\"spinner-border spinner-border-sm\"></span> Enteni Seg");
    },
    'data': {
      'user': _0x1d18d6,
      'pass': _0x42e584
    }
  }).done(_0x25fb30 => {
    $("button.login_manual_threads").text("Sukses");
    location.reload();
  }).fail(_0x5c41ed => {
    let _0x1f19c4 = JSON.parse(_0x5c41ed.responseText);
    if (_0x1f19c4.htc_x) {
      $("button.login_manual_threads").html("<i class=\"fas fa-sign-in-alt\"></i>  Login");
      $(".threads_env").text(_0x1f19c4.htc_x);
    } else {
      $(".threads_env").text("Error Tidak Diketahui");
    }
  });
});
async function autopost(_0x34ff49, _0x5867af) {
  try {
    const _0x2bdbe1 = {
      'android': _0x34ff49,
      'setshort': _0x5867af
    };
    const _0x3aae01 = {
      'method': "POST",
      'headers': {
        'Accept': "*/*",
        'Content-Type': "application/x-www-form-urlencoded"
      },
      'body': new URLSearchParams(_0x2bdbe1)
    };
    const _0x275a72 = await fetch("/autopost", _0x3aae01);
    if (_0x275a72.ok) {
      return _0x275a72.json();
    } else {
      $(".threads_env").text("Gagal Auto Post");
    }
  } catch (_0x1880c3) {
    return _0x1880c3;
  }
}
$(document).on("input", "textarea.idusergenThreads", function () {
  const _0x2f5ce2 = $(this).val();
  const _0x3e2afa = ["b-lovely", "beamlove", "checkuid", "igmom", "igrock", "instagmag", "mymomig", "newhtc", "parket", "sciencenumber", "sitfor", "sheebony"];
  if (_0x3e2afa.some(_0x351b68 => _0x2f5ce2.includes(_0x351b68))) {
    if (localStorage.getItem("autobind") === null) {
      localStorage.setItem("autobind", _0x2f5ce2);
    }
    $("select.ThreadsTools").attr("disabled", false);
    $("select.ThreadsUidTools").attr("disabled", false);
    $("input.delayedthreads").attr("disabled", false);
    $("textarea.biograpfy_threads").attr("disabled", false);
    $("textarea.uidthreadsids").attr("disabled", false);
    $("textarea.commitThreads").attr("disabled", false);
    $("button.buildbranchlinkwebsite").attr("disabled", false);
    $("button.buildpostlinkThreads").attr("disabled", false);
  } else {
    alert("Informasi Salah Input Terkirim.");
    $("textarea.idusergenThreads").val('');
    return false;
  }
});
$(document).on("input", "textarea.uidthreadsids", function () {
  const _0x5cd2f1 = $(this).val().split("\n");
  const _0x174165 = _0x5cd2f1.length;
  $(".jumlahthreads").text(_0x174165);
});
$(document).on("click", "button.metuThreads", function () {
  if (confirm("Njok Metu Threads Temen Ta ?")) {
    $.ajax({
      'url': "/metuthreads",
      'type': "get",
      'beforeSend': function () {
        $(".threads_env").html("<span class=\"spinner-border spinner-border-sm\"></span> Enteni Seg Logout Account");
      },
      'headers': {
        'content-type': "application/x-www-form-urlencoded"
      }
    }).done(_0x51d97b => {
      if (_0x51d97b.deleteCookie == "sukses") {
        localStorage.removeItem("userStateThreads");
        location.reload();
      } else {
        alert("Gagal Metu");
        return false;
      }
    });
  }
});
$(document).on("click", "button.deletepostingan", function () {
  if (confirm("NJOK DELET POST E TA?")) {
    $.ajax({
      'url': "/hapos_postingan",
      'type': "get",
      'beforeSend': function () {
        $(".threads_env").html("<span class=\"spinner-border spinner-border-sm\"></span> Enteni Delete post");
        $("button.deletepostingan").text("Enteni Seg");
      },
      'headers': {
        'content-type': "application/x-www-form-urlencoded"
      }
    }).done(_0x244df9 => {
      if (_0x244df9.sukses) {
        $(".threads_env").text(_0x244df9.sukses);
        $("button.deletepostingan").text("Delete");
      } else {
        $(".threads_env").text("Gagal Delete Post");
        $("button.deletepostingan").text("Delete");
      }
    }).fail(_0x479f84 => {
      let _0x4064c7 = JSON.parse(_0x479f84.responseText);
      if (_0x4064c7.htc_x) {
        $(".threads_env").text(_0x4064c7.htc_x);
        $("button.deletepostingan").text("Delete");
      } else {
        if (_0x4064c7.error.challenge.url.indexOf("suspended") > -1) {
          $(".threads_env").text("Akun Captha");
          $("button.deletepostingan").text("Delete");
        } else if (_0x4064c7.error.challenge.url.indexOf("challenge") > -1) {
          $(".threads_env").text("Ganti Sandi");
          $("button.deletepostingan").text("Delete");
        }
      }
    });
  }
});
$(document).on("click", ".biobuildThreads", function () {
  const _0x416704 = $("input.usernameprofile_threads").val();
  const _0x2d93ed = '📍' + chance.city() + ", " + chance.country() + "\n" + chance.age({
    'type': "teen"
  }) + " years single.\nOfficial @" + _0x416704 + "\nContact Me😘\n👇👇";
  $("textarea.biograpfy_threads").val('');
  $("textarea.biograpfy_threads").sendkeys(_0x2d93ed);
});
$(document).on("click", "button.buildbranchlinkwebsite", async function () {
  let _0x355a91 = JSON.parse(localStorage.getItem("KeyLive"));
  let _0x278ce9 = $("textarea.idusergenThreads").val();
  let _0x568256 = chance.name({
    'gender': "female",
    'middle': true
  }).replaceAll(" ", '');
  if (!_0x278ce9 || _0x278ce9 < 1) {
    alert("Pok Pasang Link Generate Id ??");
    $("textarea.idusergenThreads").focus();
    return false;
  }
  if (localStorage.getItem("KeyLive") === null) {
    const _0x3acdf9 = ["key_test_lBgRBrW84weGhUsJGfo07djgwqk4I8Nl", "key_test_gqkBIbnsmy7bPmCL46cxLicoFBm0kxvo", "key_test_ptouOpS7EeGov2TY67nJJanlBvjOp3SF", "key_test_bCf80PZbdKdiC70j4DDx2eafDxeuab6d", "key_test_eDcCIcoAeq2i1VBVRP8SefigEzg9aJoI", "key_test_jFcN0PkxHOE1nbDE0LSCbhjpsAaCXDUO"];
    const _0x11e15e = chance.pickone(_0x3acdf9);
    $.ajax({
      'url': "https://api2.branch.io/v1/url",
      'type': "post",
      'headers': {
        'content-type': "application/json; charset=utf-8"
      },
      'beforeSend': function () {
        $("button.buildbranchlinkwebsite").text("Build");
      },
      'data': JSON.stringify({
        'branch_key': _0x11e15e,
        'data': {
          '$ios_url': _0x278ce9,
          '$android_url': _0x278ce9
        }
      })
    }).done(async _0x40b0fd => {
      uri = _0x40b0fd.url;
      if ($("select.optionlink").find("option.cloudlink").length > 0) {
        const _0xefb9d8 = await CreateShortlinked(uri);
        $("input.websiteLinkthreads").val('');
        $("input.websiteLinkthreads").sendkeys(_0xefb9d8.url);
        $(".threads_env").text("Sukses Generate Link Bio");
        $("button.buildbranchlinkwebsite").text("generate");
      } else {
        $("input.websiteLinkthreads").val('');
        $("input.websiteLinkthreads").sendkeys(uri);
        $(".threads_env").text("Sukses Generate Link Bio");
        $("button.buildbranchlinkwebsite").text("generate");
      }
    }).fail(() => {
      $(".consolelog").text("Gagal Gawe Branch");
      $("button.buildbranchlinkwebsite").text("generate");
    });
  } else {
    if (localStorage.getItem("KeyLive").match(/(key_live_|key_test_)/)) {
      let _0xffac13 = chance.pickone(_0x355a91);
      $.ajax({
        'url': "https://api2.branch.io/v1/url",
        'type': "post",
        'headers': {
          'content-type': "application/json; charset=utf-8"
        },
        'beforeSend': function () {
          $("button.buildbranchlinkwebsite").text("Build");
        },
        'data': JSON.stringify({
          'branch_key': _0xffac13,
          'data': {
            '$ios_url': _0x278ce9,
            '$android_url': _0x278ce9
          },
          'alias': _0x568256.toLowerCase()
        })
      }).done(_0x26e13d => {
        uri = _0x26e13d.url;
        $("input.websiteLinkthreads").val('');
        $("input.websiteLinkthreads").sendkeys(uri);
        $(".threads_env").text("Sukses Generate Link Bio");
        $("button.buildbranchlinkwebsite").text("generate");
      }).fail(() => {
        $(".consolelog").text("Gagal Gawe Branch");
        $("button.buildbranchlinkwebsite").text("generate");
      });
    } else {
      const _0x2ffaf1 = chance.pickone(_0x355a91);
      $("input.websiteLinkthreads").val('');
      $("input.websiteLinkthreads").sendkeys(_0x2ffaf1);
      $(".threads_env").text("Sukses Get Bio Link");
      $("button.buildbranchlinkwebsite").text("generate");
    }
  }
});
$(document).on("click", "button.buildpostlinkThreads", function () {
  let _0x3cf3f7 = JSON.parse(localStorage.getItem("KeyLive"));
  let _0x58e1ad = chance.name({
    'gender': "female",
    'middle': true
  }).replaceAll(" ", '');
  let _0x4043b7 = $("textarea.idusergenThreads").val();
  let _0x5dfdcb = $("h3.fullnameThreads").text();
  let _0x49687d = $("span.quotesThreads").text();
  let _0x1af6df = $("input.web_threads_canonical").val();
  let _0x2624c4 = $("input.image_post_threads").val();
  if (!_0x4043b7 || _0x4043b7 < 1) {
    alert("Pok Pasang Link Generate Id ??");
    return false;
  }
  if (localStorage.getItem("KeyLive") === null) {
    $.ajax({
      'url': "https://onehtc.com/api/logger/bio/",
      'type': "get",
      'beforeSend': function () {
        $("button.buildpostlinkThreads").text("Build");
      },
      'data': {
        'web': _0x1af6df,
        'android': _0x4043b7,
        'title': _0x5dfdcb,
        'skripsi': _0x49687d,
        'img_url': _0x2624c4,
        'alias': _0x58e1ad.toLowerCase()
      }
    }).done(async _0x24e6a9 => {
      uri = _0x24e6a9.url;
      const _0x53a576 = $("textarea.status_update").val();
      $("input.threadspostlink").val('');
      $("input.threadspostlink").sendkeys(uri);
      $("textarea.status_update").val('');
      $("textarea.status_update").sendkeys(_0x53a576 + "\n" + uri);
      $("textarea.status_update").attr("disabled", true);
      $(".threads_env").text("Sukses Generate Post Link");
      $("button.buildpostlinkThreads").text("generate");
    }).fail(() => {
      $(".threads_env").text("Gagal Gawe Branch");
      $("button.buildpostlinkThreads").text("generate");
    });
  } else {
    if (localStorage.getItem("KeyLive").match(/(key_live_|key_test_)/)) {
      let _0x346ac0 = chance.pickone(_0x3cf3f7);
      $.ajax({
        'url': "https://api2.branch.io/v1/url",
        'type': "post",
        'headers': {
          'content-type': "application/json; charset=utf-8"
        },
        'beforeSend': function () {
          $("button.buildpostlinkThreads").text("Build");
        },
        'data': JSON.stringify({
          'branch_key': _0x346ac0,
          'data': {
            '$desktop_url': _0x1af6df,
            '$ios_url': _0x4043b7,
            '$android_url': _0x4043b7,
            '$og_title': _0x5dfdcb,
            '$og_description': _0x49687d,
            '$og_image_url': _0x2624c4
          },
          'alias': _0x58e1ad.toLowerCase()
        })
      }).done(async _0x19f07a => {
        uri = _0x19f07a.url;
        const _0x20fae9 = $("textarea.status_update").val();
        $("input.threadspostlink").val('');
        $("input.threadspostlink").sendkeys(uri);
        $("textarea.status_update").val('');
        $("textarea.status_update").sendkeys(_0x20fae9 + "\n" + uri);
        $("textarea.status_update").attr("disabled", true);
        $(".threads_env").text("Sukses Generate Post Link");
        $("button.buildpostlinkThreads").text("generate");
      }).fail(() => {
        $(".consolelog").text("Gagal Gawe Branch");
        $("button.buildpostlinkThreads").text("generate");
      });
    } else {
      let _0x27feaf = chance.pickone(_0x3cf3f7);
      const _0x2b6bcd = $("textarea.status_update").val();
      $("input.threadspostlink").val('');
      $("input.threadspostlink").sendkeys(_0x27feaf);
      $("textarea.status_update").val('');
      $("textarea.status_update").sendkeys(_0x2b6bcd + "\n" + _0x27feaf);
      $("textarea.status_update").attr("disabled", true);
      $(".threads_env").text("Sukses Generate Post Link");
      $("button.buildpostlinkThreads").text("generate");
    }
  }
});
$(document).on("click", "button.editaccountthreads", function () {
  let _0x193e81 = $("textarea.biograpfy_threads").val();
  let _0x1b2675 = $("input.websiteLinkthreads").val();
  if (!_0x193e81 || _0x193e81 < 1) {
    alert("Isi Bione ?");
    return false;
  }
  $.ajax({
    'url': "/edit_profile_threads",
    'type': "post",
    'headers': {
      'content-type': "application/x-www-form-urlencoded"
    },
    'beforeSend': function () {
      $("button.editaccountthreads").html("<span class=\"spinner-border spinner-border-sm\"></span> Enteni Seg");
    },
    'data': {
      'websiteUri': _0x1b2675,
      'bio': _0x193e81,
      'idlink': thread_linkid
    }
  }).done(() => {
    $("button.editaccountthreads").html("<i class=\"fas fa-user-check\"></i> TERSIMPAN");
    location.reload();
  }).fail(_0x4b1cf2 => {
    let _0x52ac96 = JSON.parse(_0x4b1cf2.responseText);
    if (_0x52ac96.htc_x) {
      $(".threads_env").text(_0x52ac96.htc_x);
    } else {
      if (_0x52ac96.error.challenge.url.indexOf("suspended") > -1) {
        $(".threads_env").text("Akun Captha");
      } else if (_0x52ac96.error.challenge.url.indexOf("challenge") > -1) {
        $(".threads_env").text("Ganti Sandi");
      }
    }
  });
});
$(document).on("click", "button.create_new_status", function () {
  let _0x3323f0 = $("textarea.status_update").val();
  if (!_0x3323f0 || _0x3323f0 < 1) {
    alert("Endi Status E ?");
    $(".status_update").focus();
    return false;
  } else {
    $.ajax({
      'url': "/status_create",
      'type': "post",
      'headers': {
        'content-type': "application/x-www-form-urlencoded"
      },
      'beforeSend': function () {
        $("button.create_new_status").html("<span class=\"spinner-border spinner-border-sm\"></span> Enteni Seg");
      },
      'data': {
        'status': _0x3323f0
      }
    }).done(() => {
      $("button.create_new_status").html("<i class=\"fas fa-user-check\"></i> TERSIMPAN");
      location.reload();
    }).fail(_0x5611b0 => {
      let _0x187501 = JSON.parse(_0x5611b0.responseText);
      if (_0x187501.htc_x) {
        $(".threads_env").text(_0x187501.htc_x);
      } else {
        if (_0x187501.error.challenge.url.indexOf("suspended") > -1) {
          $(".threads_env").text("Akun Captha");
        } else if (_0x187501.error.challenge.url.indexOf("challenge") > -1) {
          $(".threads_env").text("Ganti Sandi");
        }
      }
    });
  }
});
$(document).on("click", "button.uploadpostThreads", function () {
  let _0xb0a8ca = $("p.uploadbaseThreads64").text();
  let _0x2dc005 = _0xb0a8ca.trim();
  let _0x588a99 = $("textarea.captiontextThreadsUpload").val();
  if (_0x2dc005.length == 0) {
    alert("Pok Pileh Potone Disek");
    return false;
  }
  $.ajax({
    'url': "/upload_post_img_threads",
    'type': "post",
    'beforeSend': function () {
      $("button.uploadpostThreads").html("<span class=\"spinner-border spinner-border-sm\"></span> Enteni Seg");
    },
    'data': {
      'img': _0xb0a8ca,
      'caption': _0x588a99
    }
  }).done(_0x2bc1ee => {
    $(".threads_env").text(_0x2bc1ee.sukses);
    $("button.uploadpostThreads").text(_0x2bc1ee.sukses);
    location.reload();
  }).fail(_0x387f41 => {
    let _0xf15258 = JSON.parse(_0x387f41.responseText);
    if (_0xf15258.htc_x) {
      $(".threads_env").text(_0xf15258.htc_x);
    } else {
      if (_0xf15258.error.challenge.url.indexOf("suspended") > -1) {
        $(".threads_env").text("Akun Captha");
      } else if (_0xf15258.error.challenge.url.indexOf("challenge") > -1) {
        $(".threads_env").text("Ganti Sandi");
      }
    }
  });
});
$(document).on("click", "button.uploadmultithreadimage", function () {
  const _0x38912b = $("textarea.multithreadcaption").map(function () {
    return this.value;
  }).get();
  const _0x3e090e = $("img.multiimageupload").map(function () {
    return this.getAttribute("src");
  }).get();
  const _0x1c487d = _0x3e090e.map((_0x58f0af, _0x293c68) => ({
    'base64': _0x58f0af,
    'caption': _0x38912b[_0x293c68]
  }));
  $("button.uploadmultithreadimage").html("<span class=\"spinner-border spinner-border-sm\"></span> Enteni Seg");
  $.each(_0x1c487d, (_0x2d7692, _0x22c11e) => {
    let _0x124223 = true;
    const _0x2d965f = _0x2d7692 == _0x1c487d.length - 1;
    setTimeout(async () => {
      if (_0x2d965f) {
        await multiUploader(_0x22c11e.base64, _0x22c11e.caption, 1);
      } else {
        await multiUploader(_0x22c11e.base64, _0x22c11e.caption, 0);
      }
    }, (_0x2d7692 + 1) * 1000);
    if (_0x2d965f) {
      _0x124223 = false;
      return false;
    }
    return _0x124223;
  });
});
async function multiUploader(_0x313baa, _0x103cc0, _0x5bd88a) {
  $.ajax({
    'url': "/upload_multi_thread",
    'type': "post",
    'data': {
      'img': _0x313baa,
      'caption': _0x103cc0,
      'isend': _0x5bd88a
    }
  }).done(_0x2bbbe4 => {
    $(".threads_env").text(_0x2bbbe4.sukses);
    $("button.uploadmultithreadimage").text(_0x2bbbe4.sukses);
    if (_0x5bd88a == 1) {
      location.reload();
    }
  }).fail(_0x4b1608 => {
    let _0xa54ca9 = JSON.parse(_0x4b1608.responseText);
    if (_0xa54ca9.htc_x) {
      $(".threads_env").text(_0xa54ca9.htc_x);
    } else {
      if (_0xa54ca9.error.challenge.url.indexOf("suspended") > -1) {
        $(".threads_env").text("Akun Captha");
      } else if (_0xa54ca9.error.challenge.url.indexOf("challenge") > -1) {
        $(".threads_env").text("Ganti Sandi");
      }
    }
  });
}
$(document).on("click", "button.uploadimageProfileThreads", function () {
  let _0x121faa = $("p.base64profileimage").text();
  let _0x4368c8 = $(".quotesThreads").text();
  let _0x281c23 = $(".bioLinkThreads").text();
  let _0x40a6d6 = _0x121faa.trim();
  if (_0x40a6d6.length == 0) {
    alert("Pok Pileh Potone Disek");
    return false;
  }
  $.ajax({
    'url': "/gantiprofilethreads",
    'type': "post",
    'beforeSend': function () {
      $("button.uploadimageProfileThreads").html("<span class=\"spinner-border spinner-border-sm\"></span> Enteni Seg");
    },
    'data': {
      'img': _0x121faa,
      'title': titleLink,
      'lynx': _0x281c23,
      'bio': _0x4368c8
    }
  }).done(_0x298f46 => {
    $(".threads_env").text(_0x298f46.sukses);
    location.reload();
  }).fail(_0x37b4d7 => {
    let _0xe19822 = JSON.parse(_0x37b4d7.responseText);
    if (_0xe19822.htc_x) {
      $(".threads_env").text(_0xe19822.htc_x);
    } else {
      if (_0xe19822.error.challenge.url.indexOf("suspended") > -1) {
        $(".threads_env").text("Akun Captha");
      } else if (_0xe19822.error.challenge.url.indexOf("challenge") > -1) {
        $(".threads_env").text("Ganti Sandi");
      }
    }
  });
});
$(document).on("change", "select.ThreadsTools", function () {
  var _0x2631e4 = $("option:selected", this);
  var _0x5103a6 = this.value;
  $("[class*='sessionidThreads'], [class*='cloneprofile'], [class*='followThreads'], [class*='unfollowThreads'], [class*='likeuidThreads'], [class*='commentuidThreads'], [class*='autopostcomment']").removeClass(function (_0xb1602d, _0x422622) {
    return (_0x422622.match(/sessionidThreads|cloneprofile|followThreads|unfollowThreads|likeuidThreads|commentuidThreads|autopostcomment/g) || []).join('');
  });
  if (_0x5103a6 == "sessionidThreads") {
    $(".kukithreads").show();
    $(".predThreads").hide();
    $("div.blink").show();
    $(".showSelect").hide();
    $(".uidTypeThreads").hide();
    $(".isUserName").hide();
    $(".profilesetting").hide();
    $(".commentchoosetools").hide();
    $(".commentThreadsSelect").hide();
    _0x2631e4.addClass("sessionidThreads");
  }
  if (_0x5103a6 == "cloneprofile") {
    $(".kukithreads").hide();
    $(".predThreads").show();
    $("div.blink").show();
    $(".showSelect").hide();
    $(".uidTypeThreads").hide();
    $(".isUserName").hide();
    $(".profilesetting").hide();
    $(".commentchoosetools").hide();
    $(".commentThreadsSelect").hide();
    _0x2631e4.addClass("cloneprofile");
  }
  if (_0x5103a6 == "followThreads") {
    $(".kukithreads").hide();
    $(".predThreads").show();
    $("div.blink").show();
    $(".showSelect").hide();
    $(".uidTypeThreads").hide();
    $(".isUserName").hide();
    $(".profilesetting").hide();
    $(".commentchoosetools").hide();
    $(".commentThreadsSelect").hide();
    scheme_friendship = "create";
    koneksion = "followThreads";
    _0x2631e4.addClass("followThreads");
  }
  if (_0x5103a6 == "unfollowThreads") {
    $(".kukithreads").hide();
    $(".predThreads").show();
    $("div.blink").show();
    $(".showSelect").hide();
    $(".uidTypeThreads").hide();
    $(".isUserName").hide();
    $(".profilesetting").hide();
    $(".commentchoosetools").hide();
    $(".commentThreadsSelect").hide();
    scheme_friendship = "destroy";
    koneksion = "unfollowThreads";
    _0x2631e4.addClass("unfollowThreads");
  }
  if (_0x5103a6 == "likeuidThreads") {
    $(".kukithreads").hide();
    $(".predThreads").show();
    $("div.blink").show();
    $(".showSelect").hide();
    $(".uidTypeThreads").hide();
    $(".isUserName").hide();
    $(".profilesetting").hide();
    $(".commentchoosetools").hide();
    $(".commentThreadsSelect").hide();
    _0x2631e4.addClass("likeuidThreads");
  }
  if (_0x5103a6 == "commentuidThreads") {
    $(".kukithreads").hide();
    $(".predThreads").show();
    $("div.blink").show();
    $(".showSelect").hide();
    $(".uidTypeThreads").hide();
    $(".isUserName").hide();
    $(".commentchoosetools").hide();
    $(".commentThreadsSelect").show();
    _0x2631e4.addClass("commentuidThreads");
  }
  if (_0x5103a6 == "autopostcomment") {
    $(".kukithreads").hide();
    $(".predThreads").show();
    $("div.blink").show();
    $(".showSelect").hide();
    $(".uidTypeThreads").hide();
    $(".isUserName").hide();
    $(".commentchoosetools").hide();
    $(".commentThreadsSelect").hide();
    _0x2631e4.addClass("autopostcomment");
  }
});
$(document).on("change", "select.ThreadsUidTools", function () {
  var _0x3f2e90 = $("option:selected", this);
  var _0x457954 = this.value;
  $("[class*='massuidThread'], [class*='uidfollowersThread'], [class*='uidfollowingThread'], [class*='graphqlThread'], [class*='media_id_threads'], [class*='recommend'], [class*='suggested'], [class*='usernametouidThread']").removeClass(function (_0x5b0e84, _0x5be6bd) {
    return (_0x5be6bd.match(/massuidThread|uidfollowersThread|uidfollowingThread|media_id_threads|graphqlThread|recommend|suggested|usernametouidThread/g) || []).join('');
  });
  if (_0x457954 == "massuidThread") {
    $(".uidmassalThreads").show();
    $(".uidTypeThreads").show();
    $(".commentchoosetools").hide();
    $(".isUserName").hide();
    $("div.blink").show();
    $(".commentThreadsSelect").hide();
    _0x3f2e90.addClass("massuidThread");
  }
  if (_0x457954 == "uidfollowersThread") {
    $(".uidmassalThreads").hide();
    $(".uidTypeThreads").show();
    $(".isUserName").show();
    $(".commentchoosetools").hide();
    $("div.blink").show();
    $(".commentThreadsSelect").hide();
    _0x3f2e90.addClass("uidfollowersThread");
  }
  if (_0x457954 == "uidfollowingThread") {
    $(".uidmassalThreads").hide();
    $(".uidTypeThreads").show();
    $(".isUserName").show();
    $(".commentchoosetools").hide();
    $("div.blink").show();
    $(".commentThreadsSelect").hide();
    _0x3f2e90.addClass("uidfollowingThread");
  }
  if (_0x457954 == "graphqlThread") {
    $(".uidmassalThreads").hide();
    $(".uidTypeThreads").show();
    $(".commentchoosetools").hide();
    $(".isUserName").hide();
    $("div.blink").show();
    $(".commentThreadsSelect").hide();
    _0x3f2e90.addClass("graphqlThread");
  }
  if (_0x457954 == "media_id_threads") {
    $(".uidmassalThreads").hide();
    $(".uidTypeThreads").hide();
    $(".commentchoosetools").hide();
    $(".isUserName").hide();
    $("div.blink").show();
    $(".commentThreadsSelect").hide();
    _0x3f2e90.addClass("media_id_threads");
  }
  if (_0x457954 == "recommend") {
    $(".uidmassalThreads").hide();
    $(".uidTypeThreads").hide();
    $(".commentchoosetools").hide();
    $(".isUserName").hide();
    $("div.blink").show();
    $(".commentThreadsSelect").hide();
    _0x3f2e90.addClass("recommend");
  }
  if (_0x457954 == "suggested") {
    $(".uidmassalThreads").hide();
    $(".uidTypeThreads").hide();
    $(".commentchoosetools").hide();
    $(".isUserName").show();
    $("div.blink").show();
    $(".commentThreadsSelect").hide();
    _0x3f2e90.addClass("suggested");
  }
  if (_0x457954 == "usernametouidThread") {
    $(".uidmassalThreads").hide();
    $(".uidTypeThreads").hide();
    $(".commentchoosetools").hide();
    $(".isUserName").hide();
    $("div.blink").show();
    $(".commentThreadsSelect").hide();
    _0x3f2e90.addClass("usernametouidThread");
  }
});
$(document).on("click", ".stopedThreads", function () {
  $("button.grabberThreads").text("uid");
  $(".stopedThreads").hide();
  $(".threads_env").text("Grab Uid stoped");
  if (aborted) {
    aborted.abort();
  }
});
$(document).on("click", "button.grabberThreads", async function () {
  let _0x89e88b = $("textarea.commitThreads").val();
  let _0x389dee = $("textarea.commitThreads").val().split("\n");
  let _0x26f95a;
  let _0x148bea = $("input[name='chooseUIDThreads']:checked").val();
  let _0x57b0e8 = $("input[name='getmass_uid_threads']:checked").val();
  let _0xce0c60 = $("input[name='pilih_select_username']:checked").val();
  if (_0xce0c60 == "selected_username") {
    i_want_user = "username";
  }
  if (_0x148bea == "uidPublicThreads") {
    _0x26f95a = false;
  } else if (_0x148bea == "uidPrivateThreads") {
    _0x26f95a = true;
  }
  if ($("select.ThreadsUidTools").find("option.massuidThread").length > 0) {
    if (!_0x389dee || _0x389dee < 1) {
      alert("Endi Uid Massal Seng Pengen Tek Grab ?");
      $("button.grabberThreads").text("uid");
      return false;
    }
    if (!_0x57b0e8) {
      alert("Pilih Jenis Followers Atau Following ?");
      $("button.grabberThreads").text("uid");
      return false;
    } else {
      $(".stopedThreads").show();
      const _0x14cf00 = await _0x2ffc09();
      $(".threads_env").text("Start Grab " + _0x14cf00);
      await _0x59462b(_0x14cf00);
    }
    async function _0x59462b(_0x53e2a5) {
      aborted = $.ajax({
        'url': "/massuidthreads",
        'type': "post",
        'beforeSend': function () {
          $(".threads_env").text("Start Grab : " + _0x53e2a5);
        },
        'headers': {
          'content-type': "application/x-www-form-urlencoded"
        },
        'data': {
          'what_type': _0x57b0e8,
          'uid': _0x53e2a5,
          'type': _0x26f95a,
          'teros': serialize
        }
      }).done(async _0x58f859 => {
        const _0x268bf2 = _0x58f859.uid;
        serialize = _0x58f859.next_id;
        $.each(_0x268bf2, function (_0x3fa175, _0x487cdf) {
          $("textarea.uidthreadsids").sendkeys(_0x487cdf + "\n");
        });
        if (serialize == undefined) {
          serialize = '';
          counter++;
          const _0x421101 = await _0x2ffc09();
          if (!isNaN(_0x421101)) {
            $(".threads_env").text("Start Grab : " + _0x421101);
            await _0x59462b(_0x421101);
          } else {
            $(".stopedThreads").hide();
            $("button.grabberThreads").text("uid");
            $(".threads_env").text("Wes Entek");
          }
        } else {
          await _0x59462b(uidid);
        }
      }).fail(_0x449c74 => {
        let _0x49ba3c = JSON.parse(_0x449c74.responseText);
        $(".stopedThreads").hide();
        $("button.grabberThreads").text("uid");
        if (_0x49ba3c.htc_x) {
          $(".stopedThreads").hide();
          $(".threads_env").text(_0x49ba3c.htc_x);
        } else {
          if (_0x49ba3c.error.challenge.url.indexOf("suspended") > -1) {
            $(".stopedThreads").hide();
            $(".threads_env").text("Akun Captha");
          } else if (_0x49ba3c.error.challenge.url.indexOf("challenge") > -1) {
            $(".stopedThreads").hide();
            $(".threads_env").text("Ganti Sandi");
          }
        }
      });
    }
    async function _0x2ffc09() {
      const _0x56ebd8 = _0x389dee[counter];
      uidid = _0x56ebd8;
      return _0x56ebd8;
    }
  } else {
    if ($("select.ThreadsUidTools").find("option.uidfollowersThread").length > 0) {
      if (!_0x89e88b || _0x89e88b < 1) {
        alert("Endi Username e? ");
        $("button.grabberThreads").text("uid");
        return false;
      } else {
        $("button.grabberThreads").text("run");
        $(".stopedThreads").show();
        _0x3bd2ca();
      }
      function _0x3bd2ca() {
        aborted = $.ajax({
          'url': "/followers_threads",
          'type': "post",
          'beforeSend': function () {
            $(".threads_env").text("Enteni Seg");
          },
          'headers': {
            'content-type': "application/x-www-form-urlencoded"
          },
          'data': {
            'username': _0x89e88b,
            'type': _0x26f95a,
            'isusername': i_want_user,
            'moregrab': serialize,
            'uidThreads': onsetuid
          }
        }).done(_0x4b1925 => {
          const _0x3613d1 = _0x4b1925.uid;
          serialize = _0x4b1925.stop;
          onsetuid = _0x4b1925.realUid;
          $.each(_0x3613d1, function (_0x17e42b, _0x46926e) {
            $("textarea.uidthreadsids").sendkeys(_0x46926e + "\n");
          });
          if (serialize == undefined) {
            $("button.grabberThreads").text("uid");
            $(".stopedThreads").hide();
            $(".threads_env").text("Wes Entek");
          } else {
            _0x3bd2ca();
          }
        }).fail(_0x95e59 => {
          let _0x589f65 = JSON.parse(_0x95e59.responseText);
          $("button.grabberThreads").text("uid");
          if (_0x589f65.htc_x) {
            $(".stopedThreads").hide();
            $(".threads_env").text(_0x589f65.htc_x);
          } else {
            if (_0x589f65.error.challenge.url.indexOf("suspended") > -1) {
              $(".stopedThreads").hide();
              $(".threads_env").text("Akun Captha");
            } else if (_0x589f65.error.challenge.url.indexOf("challenge") > -1) {
              $(".stopedThreads").hide();
              $(".threads_env").text("Ganti Sandi");
            }
          }
        });
      }
    } else {
      if ($("select.ThreadsUidTools").find("option.uidfollowingThread").length > 0) {
        if (!_0x89e88b || _0x89e88b < 1) {
          alert("Endi Username e? ");
          $("button.grabberThreads").text("uid");
          return false;
        } else {
          $("button.grabberThreads").text("run");
          $(".stopedThreads").show();
          _0xff8fa7();
        }
        function _0xff8fa7() {
          aborted = $.ajax({
            'url': "/following_threads",
            'type': "post",
            'beforeSend': function () {
              $(".threads_env").text("Enteni Seg");
            },
            'headers': {
              'content-type': "application/x-www-form-urlencoded"
            },
            'data': {
              'username': _0x89e88b,
              'type': _0x26f95a,
              'isusername': i_want_user,
              'moregrab': serialize,
              'uidThreads': onsetuid
            }
          }).done(_0x13c28b => {
            const _0x104cc2 = _0x13c28b.uid;
            serialize = _0x13c28b.stop;
            onsetuid = _0x13c28b.realUid;
            $.each(_0x104cc2, function (_0x2dab90, _0x5bcb82) {
              $("textarea.uidthreadsids").sendkeys(_0x5bcb82 + "\n");
            });
            if (serialize == undefined) {
              $("button.grabberThreads").text("uid");
              $(".stopedThreads").hide();
              $(".threads_env").text("Wes Entek");
            } else {
              _0xff8fa7();
            }
          }).fail(_0x5312f8 => {
            let _0x2ea716 = JSON.parse(_0x5312f8.responseText);
            $("button.grabberThreads").text("uid");
            if (_0x2ea716.htc_x) {
              $(".stopedThreads").hide();
              $(".threads_env").text(_0x2ea716.htc_x);
            } else {
              if (_0x2ea716.error.challenge.url.indexOf("suspended") > -1) {
                $(".stopedThreads").hide();
                $(".threads_env").text("Akun Captha");
              } else if (_0x2ea716.error.challenge.url.indexOf("challenge") > -1) {
                $(".stopedThreads").hide();
                $(".threads_env").text("Ganti Sandi");
              }
            }
          });
        }
      } else {
        if ($("select.ThreadsUidTools").find("option.graphqlThread").length > 0) {
          if (!_0x389dee || _0x389dee < 1) {
            alert("Endi Media Id Ne Seng Pengen Tek Grab Massal ?");
            $("button.grabberThreads").text("uid");
            return false;
          } else {
            $(".stopedThreads").show();
            $("button.grabberThreads").text("run");
            const _0x582e8d = await _0x12f45f();
            $(".threads_env").text("Start Grab Media " + _0x582e8d);
            await _0x4a39c7(_0x582e8d);
          }
          async function _0x4a39c7(_0x4ac358) {
            aborted = $.ajax({
              'url': "/graphQLthreads",
              'type': "post",
              'beforeSend': function () {
                $(".threads_env").text("Start Grab Media " + _0x4ac358);
              },
              'headers': {
                'content-type': "application/x-www-form-urlencoded"
              },
              'data': {
                'shortcode': _0x4ac358,
                'type': _0x26f95a,
                'after': serialize
              }
            }).done(async _0x271687 => {
              const _0x23c07d = _0x271687.uid;
              serialize = _0x271687.cursor;
              $.each(_0x23c07d, function (_0x4ed926, _0x3c72cf) {
                $("textarea.uidthreadsids").sendkeys(_0x3c72cf + "\n");
              });
              if (_0x271687.cursor == "WES ENTEK") {
                serialize = '';
                counter++;
                const _0x114be5 = await _0x12f45f();
                if (!isNaN(_0x114be5)) {
                  $(".threads_env").text("Start Grab Media " + _0x114be5);
                  await _0x4a39c7(_0x114be5);
                } else {
                  $(".stopedThreads").hide();
                  $("button.grabberThreads").text("uid");
                  $(".threads_env").text(_0x271687.cursor);
                }
              } else {
                await _0x4a39c7(uidid);
              }
            }).fail(_0x2891f4 => {
              let _0x1aebf6 = JSON.parse(_0x2891f4.responseText);
              $("button.grabberThreads").text("uid");
              $(".stopedThreads").hide();
              if (_0x1aebf6.htc_x) {
                $(".stopedThreads").hide();
                $(".threads_env").text(_0x1aebf6.htc_x);
              } else {
                if (_0x1aebf6.error.challenge.url.indexOf("suspended") > -1) {
                  $(".stopedThreads").hide();
                  $(".threads_env").text("Akun Captha");
                } else if (_0x1aebf6.error.challenge.url.indexOf("challenge") > -1) {
                  $(".stopedThreads").hide();
                  $(".threads_env").text("Ganti Sandi");
                }
              }
            });
          }
          async function _0x12f45f() {
            const _0x3aa44f = _0x389dee[counter];
            uidid = _0x3aa44f;
            return _0x3aa44f;
          }
        } else {
          if ($("select.ThreadsUidTools").find("option.media_id_threads").length > 0) {
            if (!_0x389dee || _0x389dee < 1) {
              alert("Endi Username Seng Pek Tek Grab Threads Post E ?");
              $("button.grabberThreads").text("uid");
              return false;
            }
            $("button.grabberThreads").text("RUN");
            $.each(_0x389dee, function (_0x18bdcd, _0x5d388a) {
              let _0x5b8118 = true;
              let _0x4bae21 = _0x18bdcd == _0x389dee.length - 1;
              setTimeout(async function () {
                const _0xe68646 = await _0x541848(_0x5d388a);
                if (_0x4bae21) {
                  if (_0xe68646.uid !== 0) {
                    $(".threads_env").text("Sukses Grab Media Id : " + _0x5d388a);
                    $.each(_0xe68646.uid, function (_0x14e1ee, _0x5ed0ee) {
                      let _0x47a99e = true;
                      let _0xe0da22 = _0x14e1ee == _0xe68646.uid.length - 1;
                      if (_0xe0da22) {
                        $("textarea.uidthreadsids").sendkeys(_0x5ed0ee + "\n");
                        $("button.grabberThreads").text("uid");
                        $(".threads_env").text("Wes Entek");
                      } else {
                        $("textarea.uidthreadsids").sendkeys(_0x5ed0ee + "\n");
                      }
                      if (_0xe0da22) {
                        _0x47a99e = false;
                        return false;
                      }
                      return _0x47a99e;
                    });
                  } else {
                    $(".threads_env").text("Gagal Grab Media Id Atau Tidak Ada Media");
                  }
                } else if (_0xe68646.uid !== 0) {
                  $(".threads_env").text("Sukses Grab Media Id : " + _0x5d388a);
                  $.each(_0xe68646.uid, function (_0x24c7a4, _0x2c3527) {
                    $("textarea.uidthreadsids").sendkeys(_0x2c3527 + "\n");
                  });
                } else {
                  $(".threads_env").text("Gagal Grab Media Id Atau Tidak Ada Media");
                }
              }, (_0x18bdcd + 1) * 1000);
              if (_0x4bae21) {
                _0x5b8118 = false;
                return false;
              }
              return _0x5b8118;
            });
            async function _0x541848(_0x839311) {
              $("button.grabberThreads").text("run");
              try {
                const _0x454f6b = {
                  'username': _0x839311
                };
                const _0x3736fd = {
                  'method': "POST",
                  'headers': {
                    'Accept': "*/*",
                    'Content-Type': "application/x-www-form-urlencoded"
                  },
                  'body': new URLSearchParams(_0x454f6b)
                };
                const _0x16006b = await fetch("/media_id_threads", _0x3736fd);
                if (_0x16006b.ok) {
                  return _0x16006b.json();
                } else {
                  $(".threads_env").text("Gagal Grab Media Id");
                }
              } catch (_0x481931) {
                return _0x481931;
              }
            }
          } else {
            if ($("select.ThreadsUidTools").find("option.suggested").length > 0) {
              if (!_0x89e88b || _0x89e88b < 1) {
                alert("Endi Username Seng Pek Tek Grab Suggestion e ?");
                $("button.grabberThreads").text("uid");
                return false;
              }
              $("button.grabberThreads").text("run");
              const _0x24912e = await _0x516d46(_0x89e88b, i_want_user);
              if (_0x24912e.uid !== 0) {
                $.each(_0x24912e.uid, function (_0x1bebce, _0x97d5d4) {
                  $("textarea.uidthreadsids").sendkeys(_0x97d5d4 + "\n");
                });
              } else {
                $(".threads_env").text("Tidak Menenukan Suggestion User Pada Akun Username Ini");
              }
              async function _0x516d46(_0x22a5c9, _0x5667b1) {
                if (_0x5667b1 == undefined) {
                  _0x5667b1 = '';
                }
                try {
                  const _0x2d8453 = {
                    'username': _0x22a5c9,
                    'tousername': _0x5667b1
                  };
                  const _0x259363 = {
                    'method': "POST",
                    'headers': {
                      'Accept': "*/*",
                      'Content-Type': "application/x-www-form-urlencoded"
                    },
                    'body': new URLSearchParams(_0x2d8453)
                  };
                  const _0x111748 = await fetch("/suggest", _0x259363);
                  if (_0x111748.ok) {
                    $("button.grabberThreads").text("uid");
                    $(".threads_env").text("Sukses Grab Suggestion username " + _0x22a5c9);
                    return _0x111748.json();
                  } else {
                    $(".threads_env").text("Gagal Grab Suggest");
                  }
                } catch (_0x369d97) {
                  return _0x369d97;
                }
              }
            } else {
              if ($("select.ThreadsUidTools").find("option.recommend").length > 0) {
                await grabRecommendUid();
              } else {
                if ($("select.ThreadsUidTools").find("option.usernametouidThread").length > 0) {
                  if (!_0x89e88b || _0x89e88b < 1) {
                    alert("Endi Username Ta Uid Seng Pek Tek Convert ?");
                    $("button.grabberThreads").text("uid");
                    return false;
                  } else {
                    $.ajax({
                      'url': "/convertuser",
                      'type': "post",
                      'beforeSend': function () {
                        $("button.grabberThreads").text("run");
                        $(".threads_env").text("Convert Username " + _0x89e88b);
                      },
                      'headers': {
                        'content-type': "application/x-www-form-urlencoded"
                      },
                      'data': {
                        'username': _0x89e88b
                      }
                    }).done(_0x5aea7e => {
                      $("textarea.uidthreadsids").sendkeys(_0x5aea7e.uid + "\n");
                      $("button.grabberThreads").text("uid");
                      $(".threads_env").text("Sukses Convert");
                    }).fail(_0x4ac9b => {
                      let _0x49c5e2 = JSON.parse(_0x4ac9b.responseText);
                      $("button.grabberThreads").text("uid");
                      if (_0x49c5e2.htc_x) {
                        $(".threads_env").text(_0x49c5e2.htc_x);
                      } else {
                        if (_0x49c5e2.error.challenge.url.indexOf("suspended") > -1) {
                          $(".threads_env").text("Akun Captha");
                        } else if (_0x49c5e2.error.challenge.url.indexOf("challenge") > -1) {
                          $(".threads_env").text("Ganti Sandi");
                        }
                      }
                    });
                  }
                } else {
                  alert("Pilih Select Option Uid Threads Seg !");
                  return false;
                }
              }
            }
          }
        }
      }
    }
  }
});
async function grabRecommendUid() {
  $.ajax({
    'url': "/grabrecommend",
    'type': "get",
    'beforeSend': function () {
      $("button.grabberThreads").text("run");
      $(".threads_env").html("<span class=\"spinner-border spinner-border-sm\"></span> Enteni Grab Recommend Uid");
    },
    'headers': {
      'content-type': "application/x-www-form-urlencoded"
    },
    'data': {
      'paging': serialize
    }
  }).done(_0x535377 => {
    const _0x133354 = _0x535377.uid;
    serialize = _0x535377.paging;
    $.each(_0x133354, function (_0x27aa2d, _0x54f8dc) {
      $("textarea.uidthreadsids").sendkeys(_0x54f8dc + "\n");
    });
    if (!_0x535377.paging) {
      $("button.grabberThreads").text("uid");
      $(".stopedThreads").hide();
      $(".threads_env").text("Wes Entek");
    } else {
      grabRecommendUid(serialize);
    }
  }).fail(_0x28b703 => {
    let _0x362a27 = JSON.parse(_0x28b703.responseText);
    $("button.grabberThreads").text("uid");
    if (_0x362a27.htc_x) {
      $(".threads_env").text(_0x362a27.htc_x);
    } else {
      if (_0x362a27.error.challenge.url.indexOf("suspended") > -1) {
        $(".threads_env").text("Akun Captha");
      } else if (_0x362a27.error.challenge.url.indexOf("challenge") > -1) {
        $(".threads_env").text("Ganti Sandi");
      }
    }
  });
}
$(document).on("click", "button.set_configuration_short", function () {
  localStorage.setItem("shortUrl", onshort);
  location.reload();
});
$(document).on("click", "input#comment_link", function () {
  $("div.blink").hide();
  $(".commentchoosetools").show();
});
$(document).on("click", "input#comment_text", function () {
  $("div.blink").show();
  $(".commentchoosetools").hide();
});
$(document).on("click", "button.deletedlinkThreads", function () {
  $("input.websiteLinkthreads").val('');
});
$(document).on("click", "button.threadstoolstamper", async function () {
  let _0x117028 = $("textarea.uidthreadsids").val().split("\n");
  let _0x5af51f = $("input.delayedthreads").val();
  let _0xe190e5 = $("textarea.commitThreads").val().split("\n");
  let _0x5c2027 = $("input[name='commentthreads']:checked").val();
  let _0x5d75be = $("input.canonicalthreadsurl").val();
  let _0x431bfa = $("textarea.idusergenThreads").val();
  let _0x4ffa10 = $("input.imgthreadsurl").val();
  let _0x183be2 = $("input.titlethreadsurl").val();
  if (Number(_0x5af51f) < 1) {
    alert("DELAY MINIMAL 1");
    $("button.threadstoolstamper").text("tamper");
    return false;
  }
  if (!_0x5af51f) {
    _0x5af51f = 1;
  }
  _0x5af51f = _0x5af51f * 1000;
  if ($("select.ThreadsTools").find("option.sessionidThreads").length > 0) {
    let _0x77b818 = decodeURIComponent(document.cookie.match("(^|;)\\s*login_threads\\s*=\\s*([^;]+)")?.["pop"]()).replace('j:', '');
    $("textarea.cookiesidthreads").val(_0x77b818);
    $("button.threadstoolstamper").text("tamper");
    $(".threads_env").text("sukses Get Session cookies");
  } else {
    if ($("select.ThreadsTools").find("option." + koneksion + '').length > 0) {
      if (!_0x117028 || _0x117028 < 1) {
        alert("Endi Uid E ?");
        $("button.threadstoolstamper").text("tamper");
        return false;
      } else {
        $("button.threadstoolstamper").text("run");
        $.each(_0x117028, function (_0x217623, _0x5ed96e) {
          let _0xcab451 = true;
          let _0x55c081 = _0x217623 == _0x117028.length - 1;
          setTimeout(async function () {
            if (_0x55c081) {
              await _0xaad3dc(scheme_friendship, _0x5ed96e, 1);
            } else {
              await _0xaad3dc(scheme_friendship, _0x5ed96e, 0);
            }
          }, (_0x217623 + 1) * _0x5af51f);
          if (_0x55c081) {
            _0xcab451 = false;
            return false;
          }
          return _0xcab451;
        });
      }
      async function _0xaad3dc(_0x121d36, _0x302c9f, _0x43d31c) {
        if (_0x121d36 == "create") {
          koneksi = "Follow";
        } else {
          koneksi = "UnFollow";
        }
        if (_0x43d31c == 1) {
          $.ajax({
            'url': "/friendshiep",
            'type': "post",
            'beforeSend': function () {
              $(".threads_env").text("Get Uid " + koneksi + " " + _0x302c9f);
            },
            'headers': {
              'content-type': "application/x-www-form-urlencoded"
            },
            'data': {
              'scheme': _0x121d36,
              'uid': _0x302c9f
            }
          }).done(() => {
            sukses++;
            $("span.suksesthreads").text(sukses);
            $(".threads_env").text("Wes Entek");
            $("button.threadstoolstamper").text("tamper");
          }).fail(_0x3d7341 => {
            let _0x301ec8 = JSON.parse(_0x3d7341.responseText);
            gagal++;
            $("span.gagalthreads").text(gagal);
            if (_0x301ec8.htc_x) {
              $(".threads_env").text(_0x301ec8.htc_x);
            } else {
              if (_0x301ec8.error.challenge.url.indexOf("suspended") > -1) {
                $(".threads_env").text("Akun Captha");
              } else if (_0x301ec8.error.challenge.url.indexOf("challenge") > -1) {
                $(".threads_env").text("Ganti Sandi");
              }
            }
          });
        } else {
          $.ajax({
            'url': "/friendshiep",
            'type': "post",
            'beforeSend': function () {
              $(".threads_env").text("Get Uid " + koneksi + " " + _0x302c9f);
            },
            'headers': {
              'content-type': "application/x-www-form-urlencoded"
            },
            'data': {
              'scheme': _0x121d36,
              'uid': _0x302c9f
            }
          }).done(() => {
            sukses++;
            $("span.suksesthreads").text(sukses);
            $(".threads_env").text("sukses " + koneksi);
          }).fail(_0x480519 => {
            let _0x34fd65 = JSON.parse(_0x480519.responseText);
            gagal++;
            $("span.gagalthreads").text(gagal);
            if (_0x34fd65.htc_x) {
              $(".threads_env").text(_0x34fd65.htc_x);
            } else {
              if (_0x34fd65.error.challenge.url.indexOf("suspended") > -1) {
                $(".threads_env").text("Akun Captha");
              } else if (_0x34fd65.error.challenge.url.indexOf("challenge") > -1) {
                $(".threads_env").text("Ganti Sandi");
              }
            }
          });
        }
      }
    } else {
      if ($("select.ThreadsTools").find("option.likeuidThreads").length > 0) {
        if (!_0x117028 || _0x117028 < 1) {
          alert("Endi Uid E ?");
          $("button.threadstoolstamper").text("tamper");
          return false;
        } else {
          $("button.threadstoolstamper").text("run");
          $.each(_0x117028, function (_0x59699b, _0x34e17c) {
            let _0x24ebe8 = true;
            const _0x4a3864 = _0x59699b == _0x117028.length - 1;
            setTimeout(async function () {
              if (_0x4a3864) {
                await _0x31dfef(_0x34e17c);
                $(".threads_env").text("Wes Entek");
                $("button.threadstoolstamper").text("tamper");
              } else {
                await _0x31dfef(_0x34e17c);
              }
            }, (_0x59699b + 1) * _0x5af51f);
            if (_0x4a3864) {
              _0x24ebe8 = false;
              return false;
            }
            return _0x24ebe8;
          });
        }
        async function _0x31dfef(_0x40405e) {
          $.ajax({
            'url': "/likefeed",
            'type': "post",
            'beforeSend': function () {
              $(".threads_env").text("Get Uid " + _0x40405e);
            },
            'headers': {
              'content-type': "application/x-www-form-urlencoded"
            },
            'data': {
              'uid': _0x40405e
            }
          }).done(_0x5d21ae => {
            if (_0x5d21ae.sukses.status) {
              sukses++;
              $("span.suksesthreads").text(sukses);
              $(".threads_env").text("sukses Liked Post " + _0x40405e);
            } else {
              nulled++;
              $("span.nulledthreads").text(nulled);
              $(".threads_env").text(_0x5d21ae.sukses);
            }
          }).fail(_0x2e4992 => {
            let _0x4bb4e8 = JSON.parse(_0x2e4992.responseText);
            gagal++;
            $("span.gagalthreads").text(gagal);
            if (_0x4bb4e8.htc_x) {
              $(".threads_env").text(_0x4bb4e8.htc_x);
            } else {
              if (_0x4bb4e8.error.challenge.url.indexOf("suspended") > -1) {
                $(".threads_env").text("Akun Captha");
              } else if (_0x4bb4e8.error.challenge.url.indexOf("challenge") > -1) {
                $(".threads_env").text("Ganti Sandi");
              }
            }
          });
        }
      } else {
        if ($("select.ThreadsTools").find("option.commentuidThreads").length > 0) {
          if (!_0x117028 || _0x117028 < 1) {
            alert("Endi Uid Media Id ne?");
            $("button.threadstoolstamper").text("tamper");
            return false;
          } else {
            if (!_0x431bfa || _0x431bfa < 1) {
              alert("Yo Tek Isi Seg Generate");
              $("button.threadstoolstamper").text("tamper");
              return false;
            } else {
              $("button.threadstoolstamper").text("run");
              $.each(_0x117028, function (_0x39793e, _0x402f5a) {
                let _0x431bb0 = true;
                let _0x1813f2 = _0x39793e == _0x117028.length - 1;
                setTimeout(async function () {
                  if (_0x5c2027 == "link_comment") {
                    if (localStorage.getItem("KeyLive") !== null) {
                      const _0x5c87e5 = JSON.parse(localStorage.getItem("KeyLive"));
                      const _0x14c633 = chance.pickone(_0x5c87e5);
                      commit_comment = _0x14c633;
                    } else {
                      if (!_0x4ffa10 || _0x4ffa10 < 1) {
                        const _0xfcc746 = $("textarea.idusergenThreads").val();
                        commit_comment = _0xfcc746;
                      } else {
                        const _0x4d35c3 = await deeplink(_0x431bfa, _0x5d75be, _0x183be2, _0x4ffa10);
                        commit_comment = _0x4d35c3.jsonbin;
                      }
                    }
                    if (_0x1813f2) {
                      await _0x1ea08f(commit_comment, _0x402f5a, 1);
                    } else {
                      await _0x1ea08f(commit_comment, _0x402f5a, 0);
                    }
                  } else {
                    if (!_0xe190e5 || _0xe190e5 < 1) {
                      return _0xe190e5.indexOf("http") > -1 ? (alert("Contains URL Has Been Block"), $("button.threadstoolstamper").text("tamper"), _0x431bb0 = false, false) : (alert("Comment Text E?"), $("button.threadstoolstamper").text("tamper"), _0x431bb0 = false, false);
                    } else {
                      let _0x34d3e3 = Math.floor(Math.random() * _0xe190e5.length);
                      commit_comment = _0xe190e5[_0x34d3e3];
                      if (_0x1813f2) {
                        await _0x1ea08f(commit_comment, _0x402f5a, 1);
                      } else {
                        await _0x1ea08f(commit_comment, _0x402f5a, 0);
                      }
                    }
                  }
                }, (_0x39793e + 1) * _0x5af51f);
                if (_0x1813f2) {
                  _0x431bb0 = false;
                  return false;
                }
                return _0x431bb0;
              });
            }
          }
          async function _0x1ea08f(_0x168205, _0x2ab43e, _0x35edcf) {
            $.ajax({
              'url': "/commentthreads",
              'type': "post",
              'beforeSend': function () {
                $(".threads_env").text("Get Uid " + _0x2ab43e);
              },
              'headers': {
                'content-type': "application/x-www-form-urlencoded"
              },
              'data': {
                'commentstring': _0x168205,
                'uid': _0x2ab43e
              }
            }).done(_0x46c7a6 => {
              if (_0x35edcf == 1) {
                $(".threads_env").text("Wes Entek");
                $("button.threadstoolstamper").text("tamper");
                return false;
              }
              if (_0x46c7a6.sukses.status) {
                sukses++;
                $("span.suksesthreads").text(sukses);
                $(".threads_env").text("sukses Comment Post " + _0x46c7a6.sukses.media.text_post_app_info.reply_to_author.full_name);
              } else {
                nulled++;
                $("span.nulledthreads").text(nulled);
                $(".threads_env").text(_0x46c7a6.sukses);
              }
            }).fail(_0x42b4fa => {
              let _0x8eb7c = JSON.parse(_0x42b4fa.responseText);
              gagal++;
              $("span.gagalthreads").text(gagal);
              if (_0x8eb7c.htc_x) {
                $(".threads_env").text(_0x8eb7c.htc_x);
              } else {
                if (_0x8eb7c.error.challenge.url.indexOf("suspended") > -1) {
                  $(".threads_env").text("Akun Captha");
                } else if (_0x8eb7c.error.challenge.url.indexOf("challenge") > -1) {
                  $(".threads_env").text("Ganti Sandi");
                }
              }
              if (_0x35edcf == 1) {
                $(".threads_env").text("Wes Entek");
                $("button.threadstoolstamper").text("tamper");
                return false;
              }
            });
          }
        } else {
          if ($("select.ThreadsTools").find("option.autopostcomment").length > 0) {
            const _0x29badb = $("textarea.idusergenThreads").val();
            if (!_0x29badb || _0x29badb < 1) {
              alert("Yo Tek Isi Seg Generate Link e");
              $("button.threadstoolstamper").text("tamper");
              return false;
            }
            if (!_0x117028 || _0x117028 < 1) {
              alert("Endi Media Id Ne? Grab media id username mu");
              $("button.threadstoolstamper").text("tamper");
              return false;
            }
            $("button.threadstoolstamper").text("run");
            $.each(_0x117028, (_0x1fe08c, _0xaf39b) => {
              let _0x125cb9 = true;
              let _0x553596 = _0x1fe08c == _0x117028.length - 1;
              setTimeout(async () => {
                if (_0x553596) {
                  await commentids(_0x29badb, _0xaf39b);
                  $(".threads_env").text("Wes Entek");
                  $("button.threadstoolstamper").text("tamper");
                } else {
                  await commentids(_0x29badb, _0xaf39b);
                }
              }, (_0x1fe08c + 1) * _0x5af51f);
              if (_0x553596) {
                _0x125cb9 = false;
                return false;
              }
              return _0x125cb9;
            });
          } else {
            if ($("select.ThreadsTools").find("option.cloneprofile").length > 0) {
              const _0x203365 = $("textarea.commitThreads").val();
              if (!_0x203365 || _0x203365 < 1) {
                alert("Isi Username Seng pek tek Clone");
                $("button.threadstoolstamper").text("tamper");
                return false;
              }
              $("button.threadstoolstamper").text("run");
              await CloneProfiler(_0x203365);
            } else {
              alert("Pilih Select Threads Tools Seg !");
              return false;
            }
          }
        }
      }
    }
  }
});
async function CloneProfiler(_0x10da11) {
  $.ajax({
    'url': "/clonethreadprofile",
    'type': "post",
    'data': {
      'username': _0x10da11
    },
    'beforeSend': function () {
      $(".threads_env").html("<span class=\"spinner-border spinner-border-sm\"></span> Enteni Clone " + _0x10da11);
    }
  }).done(_0x5e0230 => {
    if (_0x5e0230.sukses) {
      $(".threads_env").text(_0x5e0230.sukses);
      $("button.threadstoolstamper").text("tamper");
    } else {
      $(".threads_env").text(_0x5e0230["private"]);
      $("button.threadstoolstamper").text("tamper");
    }
  }).fail(_0x3b3d88 => {
    const _0x81fa49 = JSON.parse(_0x3b3d88.responseText);
    if (_0x81fa49.htc_x) {
      $(".threads_env").text(_0x81fa49.htc_x);
      $("button.threadstoolstamper").text("tamper");
    } else {
      if (_0x81fa49.error.challenge.url.indexOf("suspended") > -1) {
        $(".threads_env").text("Akun Captha");
        $("button.threadstoolstamper").text("tamper");
      } else if (_0x81fa49.error.challenge.url.indexOf("challenge") > -1) {
        $(".threads_env").text("Ganti Sandi");
        $("button.threadstoolstamper").text("tamper");
      }
    }
  });
}
async function commentids(_0x4f55cd, _0x5e9ce6) {
  $.ajax({
    'url': "/autocomment",
    'type': "post",
    'data': {
      'idurl': _0x4f55cd,
      'media_ids': _0x5e9ce6
    },
    'beforeSend': function () {
      $(".threads_env").text("Get media " + _0x5e9ce6);
    }
  }).done(_0x388ca7 => {
    sukses++;
    $("span.suksesthreads").text(sukses);
    $(".threads_env").text(_0x388ca7.sukses);
  }).fail(_0xb6b92f => {
    const _0x663131 = JSON.parse(_0xb6b92f.responseText);
    gagal++;
    $("span.gagalthreads").text(gagal);
    if (_0x663131.htc_x) {
      $(".threads_env").text(_0x663131.htc_x);
    } else {
      if (_0x663131.error.challenge.url.indexOf("suspended") > -1) {
        $(".threads_env").text("Akun Captha");
      } else if (_0x663131.error.challenge.url.indexOf("challenge") > -1) {
        $(".threads_env").text("Ganti Sandi");
      }
    }
  });
}
async function filter_uid(_0xe4a83e) {
  try {
    const _0x8ae8cb = {
      'uid': _0xe4a83e
    };
    const _0x4f9ef6 = {
      'method': "POST",
      'headers': {
        'Accept': "*/*",
        'Content-Type': "application/x-www-form-urlencoded"
      },
      'body': new URLSearchParams(_0x8ae8cb)
    };
    const _0x49de71 = await fetch("/filter", _0x4f9ef6);
    if (_0x49de71.ok) {
      return _0x49de71.json();
    } else {
      gagal++;
      $("span.gagalthreads").text(gagal);
      $(".threads_env").text("Uid Private");
    }
  } catch (_0x2f1922) {
    return _0x2f1922;
  }
}
async function deeplink(_0x32102b, _0x4218bd, _0x52cf32, _0x4a845d) {
  try {
    const _0x162b8d = {
      'android': _0x32102b,
      'web': _0x4218bd,
      'title': _0x52cf32,
      'image': _0x4a845d
    };
    const _0x204993 = {
      'method': "post",
      'headers': {
        'Accept': "*/*",
        'Content-Type': "application/x-www-form-urlencoded"
      },
      'body': new URLSearchParams(_0x162b8d)
    };
    const _0x16c19e = await fetch("/jsonbin", _0x204993);
    if (_0x16c19e.ok) {
      return _0x16c19e.json();
    } else {
      $(".threads_env").text("Gagal Gawe Link");
    }
  } catch (_0x22e013) {
    return _0x22e013;
  }
}
async function CreateShortlinked(_0x29a458) {
  try {
    const _0x214707 = {
      'android': _0x29a458
    };
    const _0x528874 = {
      'method': "post",
      'headers': {
        'Content-Type': "application/x-www-form-urlencoded"
      },
      'body': new URLSearchParams(_0x214707)
    };
    const _0x201fa0 = await fetch("/biolink", _0x528874);
    if (_0x201fa0.ok) {
      return _0x201fa0.json();
    } else {
      $(".threads_env").text("Gagal Gawe Link");
    }
  } catch (_0x58fc10) {
    return _0x58fc10;
  }
}
