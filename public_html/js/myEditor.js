/* global document */
/* global Element */


// polyfill add/remove/toggle class
Element.prototype.addClass = function (c) {
    if (this.hasAttribute("class")) {
        if (this.getAttribute("class").indexOf(c) !== -1) {
            return;
        }
        this.setAttribute("class", this.getAttribute("class") + " " + c + " ");
    } else {
        this.setAttribute("class", c + " ");
    }
};
Element.prototype.removeClass = function (c) {
    if (this.hasAttribute("class") && this.getAttribute("class").indexOf(c) !== -1) {
        var classArray = this.getAttribute("class").split(" ");
        classArray.splice(classArray.indexOf(c), 1);
        var newClass = classArray.join(" ");
        this.setAttribute("class", newClass);
    }
};
Element.prototype.toggleClass = function (c) {
    if (this.hasAttribute("class") && this.getAttribute("class").indexOf(c) !== -1) {
        this.removeClass(c);
    } else {
        this.addClass(c);
    }
};



var myEditor = function () {
};

myEditor.prototype = {
    /**
     * Si limita a creare un editor di testo per ogni elemento che nel
     * DOM ha classe ".myEditor".
     *
     *
     * @returns {undefined}
     */
    init: function () {

        var DOMElements = document.querySelectorAll(".myEditor");

        // per ogni elemento che ha la classe "myEditor". Cioè per ogni
        // elemento che deve diventare un editor di testo
        // creo ed appendo in sequenza una toolbar ed un'area di testo
        for (var i = 0; i < DOMElements.length; i++) {
            DOMElements[i].appendChild(this.createMyToolbar());
            DOMElements[i].appendChild(this.createMyEditorTextArea());
        }
    },
    /**
     * Crea la toolbar.
     * la struttura che genera è la seguente
     *
     * <div class="myToolbar">
     *      <div>
     *          <ul>
     *              <li></li>
     *                 ...
     *              <li></li>
     *          </ul>
     *      </div>
     *
     *      ...
     *
     *      <div>
     *          <ul>
     *              <li></li>
     *                 ...
     *              <li></li>
     *          </ul>
     *      </div>
     * </div>
     *
     * Inoltre aggiunge eventi ai bottoni per gestire la modifica del testo
     * e per evitare che sia il testo del bottone ad essere selezionato
     *
     * @returns {Element|myEditor.prototype.createMyToolbar.myToolbar}
     */
    createMyToolbar: function () {

        var myToolbar;
        var div;
        var ul;
        var li;
        var span;
        var sub;

        myToolbar = document.createElement("div");
        myToolbar.addClass("myToolbar");

        // Blocco degli stili
        // =======================================
        div = document.createElement("div");
        myToolbar.appendChild(div);

        ul = document.createElement("ul");
        div.appendChild(ul);

        // H1 button
        li = document.createElement("li");
        span = document.createElement("span");
        span.addClass("fa fa-header fa-fw");
        li.appendChild(span);
        sub = document.createElement("sub");
        sub.innerHTML = "1";
        li.appendChild(sub);
        li.addClass("myToolbar_button");
        li.setAttribute("title", "stile header1");
        li.addEventListener("click", this.heading1);
        li.onselectstart = function () {
            return false;
        }; // ie
        li.onmousedown = function () {
            return false;
        }; // mozilla
        ul.appendChild(li);

        // H2 button
        li = document.createElement("li");
        span = document.createElement("span");
        span.addClass("fa fa-header fa-fw");
        li.appendChild(span);
        sub = document.createElement("sub");
        sub.innerHTML = "2";
        li.appendChild(sub);
        li.addClass("myToolbar_button");
        li.setAttribute("title", "stile header 2");
        li.addEventListener("click", this.heading2);
        li.onselectstart = function () {
            return false;
        }; // ie
        li.onmousedown = function () {
            return false;
        }; // mozilla
        ul.appendChild(li);

        // H3 button
        li = document.createElement("li");
        span = document.createElement("span");
        span.addClass("fa fa-header fa-fw");
        li.appendChild(span);
        sub = document.createElement("sub");
        sub.innerHTML = "3";
        li.appendChild(sub);
        li.addClass("myToolbar_button");
        li.setAttribute("title", "stile header 3");
        li.addEventListener("click", this.heading3);
        li.onselectstart = function () {
            return false;
        }; // ie
        li.onmousedown = function () {
            return false;
        }; // mozilla
        ul.appendChild(li);

        // H4 button
        li = document.createElement("li");
        span = document.createElement("span");
        span.addClass("fa fa-header fa-fw");
        li.appendChild(span);
        sub = document.createElement("sub");
        sub.innerHTML = "4";
        li.appendChild(sub);
        li.addClass("myToolbar_button");
        li.setAttribute("title", "stile header 4");
        li.addEventListener("click", this.heading4);
        li.onselectstart = function () {
            return false;
        }; // ie
        li.onmousedown = function () {
            return false;
        }; // mozilla
        ul.appendChild(li);

        // H5 button
        li = document.createElement("li");
        span = document.createElement("span");
        span.addClass("fa fa-header fa-fw");
        li.appendChild(span);
        sub = document.createElement("sub");
        sub.innerHTML = "5";
        li.appendChild(sub);
        li.addClass("myToolbar_button");
        li.setAttribute("title", "stile header5");
        li.addEventListener("click", this.heading5);
        li.onselectstart = function () {
            return false;
        }; // ie
        li.onmousedown = function () {
            return false;
        }; // mozilla
        ul.appendChild(li);

        // H6 button
        li = document.createElement("li");
        span = document.createElement("span");
        span.addClass("fa fa-header fa-fw");
        li.appendChild(span);
        sub = document.createElement("sub");
        sub.innerHTML = "6";
        li.appendChild(sub);
        li.addClass("myToolbar_button");
        li.setAttribute("title", "stile header 6");
        li.addEventListener("click", this.heading6);
        li.onselectstart = function () {
            return false;
        }; // ie
        li.onmousedown = function () {
            return false;
        }; // mozilla
        ul.appendChild(li);

        // quote button
        li = document.createElement("li");
        span = document.createElement("span");
        span.addClass("fa fa-quote-left");
        li.appendChild(span);
        li.addClass("myToolbar_button fa-fw");
        li.setAttribute("title", "stile citazione");
        li.addEventListener("click", this.quote);
        li.onselectstart = function () {
            return false;
        }; // ie
        li.onmousedown = function () {
            return false;
        }; // mozilla
        ul.appendChild(li);

        // code button
        li = document.createElement("li");
        span = document.createElement("span");
        span.addClass("fa fa-code fa-fw");
        li.appendChild(span);
        li.addClass("myToolbar_button");
        li.setAttribute("title", "stile codice");
        li.addEventListener("click", this.code);
        li.onselectstart = function () {
            return false;
        }; // ie
        li.onmousedown = function () {
            return false;
        }; // mozilla
        ul.appendChild(li);

        // removeFormat button
        li = document.createElement("li");
        span = document.createElement("span");
        span.addClass("fa fa-eraser fa-fw");
        li.appendChild(span);
        li.addClass("myToolbar_button");
        li.setAttribute("title", "remove format");
        li.addEventListener("click", this.removeFormat);
        li.onselectstart = function () {
            return false;
        }; // ie
        li.onmousedown = function () {
            return false;
        }; // mozilla
        ul.appendChild(li);


        // Blocco font
        // =======================================
        div = document.createElement("div");
        myToolbar.appendChild(div);

        ul = document.createElement("ul");
        div.appendChild(ul);

        // bold button
        li = document.createElement("li");
        span = document.createElement("span");
        span.addClass("fa fa-bold fa-fw");
        li.appendChild(span);
        li.addClass("myToolbar_button");
        li.setAttribute("title", "bold");
        li.addEventListener("click", this.bold);
        li.onselectstart = function () {
            return false;
        }; // ie
        li.onmousedown = function () {
            return false;
        }; // mozilla
        ul.appendChild(li);

        // italic button
        li = document.createElement("li");
        span = document.createElement("span");
        span.addClass("fa fa-italic fa-fw");
        li.appendChild(span);
        li.addClass("myToolbar_button");
        li.setAttribute("title", "italic");
        li.addEventListener("click", this.italic);
        li.onselectstart = function () {
            return false;
        }; // ie
        li.onmousedown = function () {
            return false;
        }; // mozilla
        ul.appendChild(li);

        // underline button
        li = document.createElement("li");
        span = document.createElement("span");
        span.addClass("fa fa-underline fa-fw");
        li.appendChild(span);
        li.addClass("myToolbar_button");
        li.setAttribute("title", "underline");
        li.addEventListener("click", this.underline);
        li.onselectstart = function () {
            return false;
        }; // ie
        li.onmousedown = function () {
            return false;
        }; // mozilla
        ul.appendChild(li);

        // strikethrough button
        li = document.createElement("li");
        span = document.createElement("span");
        span.addClass("fa fa-strikethrough fa-fw");
        li.appendChild(span);
        li.addClass("myToolbar_button");
        li.setAttribute("title", "strikethrough");
        li.addEventListener("click", this.strikethrough);
        li.onselectstart = function () {
            return false;
        }; // ie
        li.onmousedown = function () {
            return false;
        }; // mozilla
        ul.appendChild(li);

        // superScript button
        li = document.createElement("li");
        span = document.createElement("span");
        span.addClass("fa fa-superscript fa-fw");
        li.appendChild(span);
        li.addClass("myToolbar_button");
        li.setAttribute("title", "insert super script");
        li.addEventListener("click", this.superScript);
        li.onselectstart = function () {
            return false;
        }; // ie
        li.onmousedown = function () {
            return false;
        }; // mozilla
        ul.appendChild(li);

        // subScript button
        li = document.createElement("li");
        span = document.createElement("span");
        span.addClass("fa fa-subscript fa-fw");
        li.appendChild(span);
        li.addClass("myToolbar_button");
        li.setAttribute("title", "insert sub script");
        li.addEventListener("click", this.subScript);
        li.onselectstart = function () {
            return false;
        }; // ie
        li.onmousedown = function () {
            return false;
        }; // mozilla
        ul.appendChild(li);


        // Blocco posizionamento
        // =======================================
        div = document.createElement("div");
        myToolbar.appendChild(div);

        ul = document.createElement("ul");
        div.appendChild(ul);

        // orderedList button
        li = document.createElement("li");
        span = document.createElement("span");
        span.addClass("fa fa-list-ol fa-fw");
        li.appendChild(span);
        li.addClass("myToolbar_button");
        li.setAttribute("title", "insert ordered list");
        li.addEventListener("click", this.insertOrderedList);
        li.onselectstart = function () {
            return false;
        }; // ie
        li.onmousedown = function () {
            return false;
        }; // mozilla
        ul.appendChild(li);

        // unorderedList button
        li = document.createElement("li");
        span = document.createElement("span");
        span.addClass("fa fa-list-ul fa-fw");
        li.appendChild(span);
        li.addClass("myToolbar_button");
        li.setAttribute("title", "insert Unordered list");
        li.addEventListener("click", this.insertUnorderedList);
        li.onselectstart = function () {
            return false;
        }; // ie
        li.onmousedown = function () {
            return false;
        }; // mozilla
        ul.appendChild(li);

        // indent button
        li = document.createElement("li");
        span = document.createElement("span");
        span.addClass("fa fa-indent fa-fw");
        li.appendChild(span);
        li.addClass("myToolbar_button");
        li.setAttribute("title", "indent");
        li.addEventListener("click", this.indent);
        li.onselectstart = function () {
            return false;
        }; // ie
        li.onmousedown = function () {
            return false;
        }; // mozilla
        ul.appendChild(li);

        // outdent button
        li = document.createElement("li");
        span = document.createElement("span");
        span.addClass("fa fa-outdent fa-fw");
        li.appendChild(span);
        li.addClass("myToolbar_button");
        li.setAttribute("title", "outdent");
        li.addEventListener("click", this.outdent);
        li.onselectstart = function () {
            return false;
        }; // ie
        li.onmousedown = function () {
            return false;
        }; // mozilla
        ul.appendChild(li);

        // alignLeft button
        li = document.createElement("li");
        span = document.createElement("span");
        span.addClass("fa fa-align-left fa-fw");
        li.appendChild(span);
        li.addClass("myToolbar_button");
        li.setAttribute("title", "insert align left");
        li.addClass("button alignLeft");
        li.addEventListener("click", this.alignLeft);
        li.onselectstart = function () {
            return false;
        }; // ie
        li.onmousedown = function () {
            return false;
        }; // mozilla
        ul.appendChild(li);

        // alignCenter button
        li = document.createElement("li");
        span = document.createElement("span");
        span.addClass("fa fa-align-center fa-fw");
        li.appendChild(span);
        li.addClass("myToolbar_button");
        li.setAttribute("title", "insert align center");
        li.addEventListener("click", this.alignCenter);
        li.onselectstart = function () {
            return false;
        }; // ie
        li.onmousedown = function () {
            return false;
        }; // mozilla
        ul.appendChild(li);

        // alignRight button
        li = document.createElement("li");
        span = document.createElement("span");
        span.addClass("fa fa-align-right fa-fw");
        li.appendChild(span);
        li.addClass("myToolbar_button");
        li.setAttribute("title", "insert align right");
        li.addEventListener("click", this.alignRight);
        li.onselectstart = function () {
            return false;
        }; // ie
        li.onmousedown = function () {
            return false;
        }; // mozilla
        ul.appendChild(li);

        // alignJustify button
        li = document.createElement("li");
        span = document.createElement("span");
        span.addClass("fa fa-align-justify fa-fw");
        li.appendChild(span);
        li.addClass("myToolbar_button");
        li.setAttribute("title", "insert align justify");
        li.addEventListener("click", this.alignJustify);
        li.onselectstart = function () {
            return false;
        }; // ie
        li.onmousedown = function () {
            return false;
        }; // mozilla
        ul.appendChild(li);


        // Blocco insert
        // =======================================
        div = document.createElement("div");
        myToolbar.appendChild(div);

        ul = document.createElement("ul");
        div.appendChild(ul);

        // insertImage button
        li = document.createElement("li");
        span = document.createElement("span");
        span.addClass("fa fa-image fa-fw");
        li.appendChild(span);
        li.addClass("myToolbar_button");
        li.setAttribute("title", "insert image");
        li.addEventListener("click", this.insertImage);
        li.onselectstart = function () {
            return false;
        }; // ie
        li.onmousedown = function () {
            return false;
        }; // mozilla
        ul.appendChild(li);

        // insertLink button
        li = document.createElement("li");
        span = document.createElement("span");
        span.addClass("fa fa-link fa-fw");
        li.appendChild(span);
        li.addClass("myToolbar_button");
        li.setAttribute("title", "insert link");
        li.addEventListener("click", this.insertLink);
        li.onselectstart = function () {
            return false;
        }; // ie
        li.onmousedown = function () {
            return false;
        }; // mozilla
        ul.appendChild(li);

        // insertHorizontRule button
        li = document.createElement("li");
        span = document.createElement("span");
        span.addClass("fa fa-minus fa-fw");
        li.appendChild(span);
        li.addClass("myToolbar_button");
        li.setAttribute("title", "insert horizont rule");
        li.addEventListener("click", this.insertHorizontRule);
        li.onselectstart = function () {
            return false;
        }; // ie
        li.onmousedown = function () {
            return false;
        }; // mozilla
        ul.appendChild(li);

//        // backgroundColor button
//        li = document.createElement("button");
//        li.setAttribute("title", "background color");
//        li.addClass("button backgroundColor");
//        li.innerHTML = "Bg";
//        li.addEventListener("click", this.backgroundColor);
//        myToolbar.appendChild(li);
//
//        // foregroundColor button
//        li = document.createElement("button");
//        li.setAttribute("title", "foreground color");
//        li.addClass("button foregroundColor");
//        li.innerHTML = "fg";
//        li.addEventListener("click", this.foregroundColor);
//        myToolbar.appendChild(li);

        return myToolbar;

    },
    /**
     * Crea e ritorna una struttura facile facile:
     *
     * <div class="myEditorTextArea" contenteditable="true"></div>
     *
     * @returns {Element|myEditor.prototype.createMyEditorTextArea.myEditorTextArea}
     */
    createMyEditorTextArea: function () {

        var myEditorTextArea = document.createElement("div");
        myEditorTextArea.setAttribute("contenteditable", "true");
        myEditorTextArea.addClass("myEditorTextArea");

        return myEditorTextArea;
    },
    bold: function () {
        document.execCommand('bold');
    },
    italic: function () {
        document.execCommand('italic');
    },
    underline: function () {
        document.execCommand('underline');
    },
    strikethrough: function () {
        document.execCommand('strikethrough');
    },
    removeFormat: function () {
        document.execCommand('removeformat');
    },
    backgroundColor: function () {
        document.execCommand('backcolor', false, '#FF0000');
    },
    foregroundColor: function () {
        document.execCommand('forecolor', false, '#00FF00');
    },
    insertLink: function () {
        document.execCommand('createlink', false, 'http://www.google.it');
    },
    // WARNING: non funziona su chrome!
    // WARNING: non funziona su explorer!
    heading1: function () {
        document.execCommand('formatblock', false, "H1");
    },
    heading2: function () {
        document.execCommand('formatblock', false, "H2");
    },
    heading3: function () {
        document.execCommand('formatblock', false, "H3");
    },
    heading4: function () {
        document.execCommand('formatblock', false, "H4");
    },
    heading5: function () {
        document.execCommand('formatblock', false, "H5");
    },
    heading6: function () {
        document.execCommand('formatblock', false, "H6");
    },
    quote: function () {
        document.execCommand('formatblock', false, "BLOCKQUOTE");
    },
    /**
     * fatta a mano poichè non funziona "formatblock" con <CODE> dato che
     * è un elemento inline.
     *
     * Questa funzione semplicemente prende la selezione e si salva il
     * TextNode contenente il testo selezionato ( PURTROPPO SOLO IL TESTO!
     * NON SALVA ANCHE I TAG ATTORNO AL TESTO ), controlla di aver preso
     * effettivamente del testo, lo mette dentro il tag <code> e poi riposiziona
     * il tutto al suo posto
     *
     * @returns {undefined}
     */
    code: function () {


        var selection = window.getSelection();
        var oldNode = selection.focusNode;
        debugger;
        if (oldNode.nodeType !== 3) {
            // se la selezione non è un nodo di testo
            // probabilmente ho sbagliato la selezione.
            // quindi non faccio nulla
            return;
        }
        var code = document.createElement("code");
        selection.focusNode.parentNode.replaceChild(code, oldNode);
        code.appendChild(oldNode);
    },
    indent: function () {
        document.execCommand('indent');
    },
    outdent: function () {
        document.execCommand('outdent');
    },
    insertHorizontRule: function () {
        document.execCommand('inserthorizontalrule');
    },
    insertImage: function (url) {
        document.execCommand('insertimage', false, url);
    },
    insertOrderedList: function () {
        document.execCommand('insertorderedlist');
    },
    insertUnorderedList: function () {
        document.execCommand('insertunorderedlist');
    },
    alignLeft: function () {
        document.execCommand('justifyleft');
    },
    alignCenter: function () {
        document.execCommand('justifycenter');
    },
    alignRight: function () {
        document.execCommand('justifyright');
    },
    alignJustify: function () {
        document.execCommand('justifyfull');
    },
    subScript: function () {
        document.execCommand('subscript');
    },
    superScript: function () {
        document.execCommand('superscript');
    }
};

myEditor.constructor = myEditor;

var e = new myEditor();
e.init();