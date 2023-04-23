const gensimple = document.querySelector(".gen-simple"),
    genunique = document.querySelector(".gen-unique"),
    cvbtns = document.querySelector(".cv-btns"),
    inputimg = document.querySelector("#hide-on-simple"),
    resumeS = document.querySelector(".resumeS"),
    iwraps = document.querySelector(".input-wraps"),
    loading = document.querySelector(".loading"),
    resume = document.querySelector(".resume"),
    errorpage = document.querySelector(".errorpage");
function display() {
    let e = document.querySelector(".input-img").value;
    document.querySelector(".red").innerHTML = e;
}
function generateU() {
    const e = document.querySelector(".input-name").value,
        t = document.querySelector(".input-age").value,
        n = document.querySelector(".input-date").value,
        r = document.querySelector(".input-fname").value,
        o = document.querySelector(".input-add").value,
        u = document.querySelector(".input-bg").value,
        c = document.querySelector(".input-phone").value,
        l = document.querySelector(".input-email").value,
        i = document.querySelector(".input-nationality").value,
        s = document.querySelector(".input-collage").value,
        d = document.querySelector(".input-computer").value,
        a = document.querySelector(".input-work1").value,
        m = document.querySelector(".input-work2").value,
        y = (document.querySelector(".img img"), document.querySelector(".tname")),
        S = document.querySelector(".tadd"),
        q = document.querySelector(".name"),
        p = document.querySelector(".age"),
        g = document.querySelector(".dob"),
        L = document.querySelector(".add"),
        v = document.querySelector(".fname"),
        T = document.querySelector(".bgroup"),
        H = document.querySelector(".email"),
        M = document.querySelector(".phone"),
        h = document.querySelector(".nationality"),
        w = document.querySelector(".clg"),
        b = document.querySelector(".cp"),
        f = document.querySelector(".fw1"),
        k = document.querySelector(".fw2");
    document.querySelector(".btn-gen1"), document.querySelector(".btn-gen2");
    var U = document.querySelector(".input-img");
    const A = document.querySelector(".idno").value,
        D = document.querySelector(".ms").value,
        R = document.querySelector(".uidnoholder"),
        F = document.querySelector(".umsholder");
    if ("" === e || "" === t || "" === o || "" === u || "" === n || "" === l || "" === c || "" === i || "" === r || 0 === U.files.length)
        errorpage.classList.add("show"),
            (errorpage.innerHTML = "<div> Error, Loading ... </div><span class='spin'></span>"),
            setTimeout(() => {
                errorpage.classList.remove("show");
            }, 4e3);
    else {
        let U = new FileReader(),
            E = document.querySelector(".input-img");
        (U.onload = () => {
            let e = document.querySelector(".img");
            const t = U.result;
            e.style.backgroundImage = `url('${t}')`;
        }),
            U.readAsDataURL(E.files[0]),
            (q.innerHTML = e),
            (y.innerHTML = e),
            (S.innerHTML = o),
            (p.innerHTML = t),
            (L.innerHTML = o),
            (g.innerHTML = n),
            (v.innerHTML = r),
            (T.innerHTML = u),
            (M.innerHTML = "+"+c),
            (H.innerHTML = l),
            (R.innerHTML = A),
            (F.innerHTML = D),
            (h.innerHTML = i),
            (w.innerHTML = s),
            (b.innerHTML = d),
            (f.innerHTML = a),
            (k.innerHTML = m),
            loading.classList.add("show"),
            iwraps.classList.remove("visible"),
            window.scrollTo(0, loading.scrollHeight),
            setTimeout(() => {
                loading.classList.remove("show"), resume.classList.add("show"), genunique.classList.add("visible");
            }, 4e3);
    }
}
function generateS() {
    const e = document.querySelector(".input-name").value,
        t = document.querySelector(".input-age").value,
        n = document.querySelector(".input-date").value,
        r = document.querySelector(".input-fname").value,
        o = document.querySelector(".input-add").value,
        u = document.querySelector(".input-bg").value,
        c = document.querySelector(".input-phone").value,
        l = document.querySelector(".input-email").value,
        i = document.querySelector(".input-nationality").value,
        s = document.querySelector(".input-collage").value,
        d = document.querySelector(".input-computer").value,
        a = document.querySelector(".input-work1").value,
        m = document.querySelector(".input-work2").value,
        y = document.querySelector(".names"),
        S = document.querySelector(".ages"),
        q = document.querySelector(".dobs"),
        p = document.querySelector(".adds"),
        g = document.querySelector(".fnames"),
        L = document.querySelector(".bgroups"),
        v = document.querySelector(".emails"),
        T = document.querySelector(".phones"),
        H = document.querySelector(".nationalitys"),
        M = document.querySelector(".clgs"),
        h = document.querySelector(".cps"),
        w = document.querySelector(".firstwork"),
        b = document.querySelector(".secondwork"),
        f = document.querySelector(".idno").value,
        k = document.querySelector(".ms").value,
        U = document.querySelector(".idnoholder"),
        A = document.querySelector(".msholder");
    "" === e || "" === t || "" === o || "" === u || "" === n || "" === l || "" === c || "" === i || "" === r
        ? (errorpage.classList.add("show"),
          (errorpage.innerHTML = "<div> Error, Loading ... </div><span class='spin'></span>"),
          setTimeout(() => {
              errorpage.classList.remove("show");
          }, 4e3))
        : ((y.innerHTML = e),
          (S.innerHTML = t),
          (p.innerHTML = o),
          (q.innerHTML = n),
          (g.innerHTML = r),
          (L.innerHTML = u),
          (T.innerHTML = "+"+c),
          (v.innerHTML = l),
          (H.innerHTML = i),
          (U.innerHTML = f),
          (A.innerHTML = k),
          (M.innerHTML = s),
          (h.innerHTML = d),
          (w.innerHTML = a),
          (b.innerHTML = m),
          loading.classList.add("show"),
          iwraps.classList.remove("visible"),
          window.scrollTo(0, loading.scrollHeight),
          setTimeout(() => {
              loading.classList.remove("show"), resumeS.classList.add("visible"), gensimple.classList.add("visible");
          }, 4e3));
}
function check(e) {
    var t = document.querySelector(".input-img"),
        n = document.querySelector(".imgholder");
    n.querySelector("img");
    if (0 == t.files.length) document.querySelector(".alert").innerHTML = " Failed : Img Not Found. ";
    else {
        (document.querySelector(".alert").innerHTML = " Success : " + t.value + "Img Found."), document.querySelector(".alert").classList.add("color"), n.classList.add("flex");
        let e = new FileReader(),
            r = document.querySelector(".input-img");
        (e.onload = () => {
            document.querySelector(".imgholder img").src = e.result;
        }),
            e.readAsDataURL(r.files[0]);
    }
}
function download(e) {
    const t = document.querySelector(".download"),
        n = t.innerHTML;
    (t.innerHTML = "Downloading.."),
        setTimeout(() => {
            t.innerHTML = n;
        }, 5e3);
    const r = document.querySelector(".resume");
    html2canvas(r)
        .then((e) => ((e.style.display = "none"), document.body.appendChild(e), e))
        .then((e) => {
            const t = e.toDataURL("image/png").replace("image/png", "image/octet-stream"),
                n = document.createElement("a");
            n.setAttribute("download", "my-image.png"), n.setAttribute("href", t), n.click(), e.remove();
        });
}
function downloadS() {
    const e = document.querySelector(".download"),
        t = e.innerHTML;
    (e.innerHTML = "Downloading.."),
        setTimeout(() => {
            e.innerHTML = t;
        }, 4e3);
    const n = document.querySelector(".resumeS");
    html2canvas(n)
        .then((e) => ((e.style.display = "none"), document.body.appendChild(e), e))
        .then((e) => {
            const t = e.toDataURL("image/png").replace("image/png", "image/octet-stream"),
                n = document.createElement("a");
            n.setAttribute("download", "my-image.png"), n.setAttribute("href", t), n.click(), e.remove();
        });
}
function genS() {
    cvbtns.classList.add("hide"),
        inputimg.classList.add("hide"),
        iwraps.classList.add("visible"),
        document.querySelector(".genS").classList.add("visible"),
        errorpage.classList.add("show"),
        (errorpage.innerHTML = "<span class='spin'></span>"),
        setTimeout(() => {
            errorpage.classList.remove("show");
        }, 4e3);
}
function genU() {
    cvbtns.classList.add("hide"),
        iwraps.classList.add("visible"),
        document.querySelector(".genU").classList.add("visible"),
        errorpage.classList.add("show"),
        (errorpage.innerHTML = "<span class='spin'></span>"),
        setTimeout(() => {
            errorpage.classList.remove("show");
        }, 4e3);
}
function Closeme() {
    document.querySelector(".imgholder").classList.remove("flex");
}
function openov() {
    document.querySelector(".ov").style.display = "flex";
}
