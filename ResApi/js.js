$(function () {
    const konyvek = [];

    //elérésiut
    const eleresiut = "http://localhost:3000/konyvek";
    const eleresiut2 = "http://localhost:3000/serzo";

    //lekérdezések
    let felsorol = "?_start=1&_limit=7";
    let id = " ?id=1";
    let szerzokneve = "?_sort=nev=Ann";
    let szerzokid = "?id=1&id=6";
    let mettolMeddig = "?_start=16&_limit=133";
    //http://localhost:3000/serzo?

    let felsorolurl = eleresiut + felsorol;
    let idurl = eleresiut2 + id;
    let medtolurl = eleresiut2 + mettolMeddig;
    console.log(konyvek);
    let adat =
    {
        
        "nev": "Kovacs",
        "cim": "Az elveszet hegy",
        "ar": "300 ft",
        "kategoria": "regény"
    }

    $(".modosit").on("click", () => myAjaxPut(eleresiut, konyvek, kiir));
       
     function myAjaxPut(eleresiut, adat) {
        
        $.ajax(
            {
                url: eleresiut+"/"+adat.id,
                type: "PUT",
                data:adat,
                success: function (result) {
                    console.log(result);
                    myAjax(eleresiut, konyvek, kiir);
                   
                }
            }

        );
    }






    myAjaxDelete(eleresiut, konyvek, kiir);
    $(".torles").on("click", () => myAjaxDelete(eleresiut, konyvek, kiir));
     function myAjaxDelete(eleresiut, adat) {
        
        $.ajax(
            {
                url: eleresiut+"/"+id,
                type: "DELETE",
                data:adat,
                success: function (result) {
                    console.log(result);
                    result.forEach((element) => {
                        tomb.push(element);

                    });
                   myAjax(eleresiut, konyvek, kiir);
                }
            }

        );
    }
    myAjaxPost(eleresiut, konyvek, kiir);
    function myAjaxPost(eleresiut, adat) {
        
        $.ajax(
            {
                url: eleresiut,
                type: "POST",
                success: function (result) {
                    console.log(result);
                    result.forEach((element) => {
                        tomb.push(element);

                    });
                    myAjax(eleresiut, konyvek, kiir)

                }
            }

        );
    }


    myAjax(eleresiut, konyvek, kiir);
    function myAjax(eleresiut, tomb, myCallback) {
        tomb.splice(0,tomb.lenght);
        $.ajax(
            {
                url: eleresiut,
                type: "GET",
                success: function (result) {
                    console.log(result);
                    result.forEach((element) => {
                        tomb.push(element);

                    });
                   myCallback(tomb);
                  
                }
            }

        );
    }



    function kiir(tomb, szoveg) {
        console.log(tomb);
        let = sablon = "";
        tomb.forEach((elem) => {
            sablon += `
                < div >
            <h3>${elem.nev}</h3>
            <h4>${elem.cim}</h4>
            <p>${elem.kategoria}</p>
            <span class = "ar"> ${elem.ar} </span>          
            </div >
           `;

        });
        $(".adatok").html(sablon);

    }
})