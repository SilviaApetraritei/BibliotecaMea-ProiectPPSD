
const initialBooks = [
    "Rina Kent – Regatul Întunecat",
    "Rina Kent – Prințesa de Oțel",
    "Rina Kent – Regele Decăzut",
    "Lucinda Riley – Fata de pe stâncă",
    "Sarah Pinborough – Prin ochii ei",
    "Laura Dave – Ultimul mesaj",
    "Alex Michaelides – Fecioarele",
    "Jasper DeWitt – Pacientul",
    "Emily Henry – Întâlniri în vacanță",
    "Emily Henry – Iubire ca la carte",
    "Valérie Perrin – Apa proaspătă pentru flori",
    "Valérie Perrin – Duminicile iubirilor pierdute",
    "Ali Hazelwood – Ipoteza iubirii",
    "Ali Hazelwood – Cu dragostea în minte",
    "Ali Hazelwood – Teoria iubirii",
    "Ali Hazelwood – Șah-mat cu dragoste",
    "L.J. Shen – Cum să frângi o inimă cu un sărut",
    "Elle Kennedy – Pactul",
    "Kerri Maniscalco – Dracula: Pe urmele prințului nemuritor",
    "Kerri Maniscalco – Houdini: Marea evadare",
    "Kerri Maniscalco – Diavolul: Capcana amintirilor",
    "Holly Black – Prințul nemilos",
    "Holly Black – Regele malefic",
    "Holly Black – Regina fără regat",
    "Elena Ferrante – Prietena mea genială",
    "Elena Ferrante – Povestea noului nume",
    "Elena Ferrante – Cei care pleacă și cei ce rămân",
    "Elena Ferrante – Povestea fetiței pierdute",
    "Alexandra Christo – Umbrele care ne despart",
    "Eva Chase – Să ucizi un regat",
    "Sarah J. Maas – Casa de sticlă",
    "Scarlett St. Clair – Un joc al sorții",
    "Rebecca Yarros – Wildfire",
    "Rebecca Yarros – North",
    "Corina Cindea – Lucruri peste care nu putem trece",
    "Corina Cindea – Lucruri pe care le-am lăsat în urmă",
    "Corina Cindea – Lucruri pe care le ținem ascunse",
    "Ana Huang – Twisted Love",
    "Ana Huang – Twisted Games",
    "Ana Huang – Twisted Hate",
    "Ana Huang – Twisted Lies",
    "Elle Kennedy – Greșeala",
    "Lauren Asher – Dragoste pe proiecte",
    "Weronika Anna Marczak – Familia Monet",
    "Dr. Carol E. Fleming – Arta subtilă a conversațiilor armonioase",
    "Christie Watson – Acolo unde femeile sunt regi",
    "L.J. Shen – Vicious",
    "Jennifer L. Armentrout – Ispita cavalerului de onoare",
    "Jennifer L. Armentrout – Ispita jucătorului",
    "Jennifer L. Armentrout – Ispita bodyguardului",
    "Lana Ferguson – Dădaca",
    "Liz Tomforde – La înălțime",
    "Angie Hockman – Român în croazieră",
    "Oyinkan Braithwaite – Sora mea, ucigașa în serie",
    "Cristina Chiperi – Autobiografia unei fete de miezul nopții",
    "Matt Haig – Biblioteca de la miezul nopții",
    "Stephen King – IT",
    "Elle Kennedy – Adevărul",
    "Shelby Mahurin – Sânge & Miere",
    "Shelby Mahurin – Zei & Monștri",
    "Jennifer L. Armentrout – Războiul celor două regine",
    "Jennifer L. Armentrout – Regatul focului și al dorinței",
    "Rosie Faith Zboacă – Pisicile războinice",
    "Sarah Pearse – Sanatoriul",
    "Heather Morris – Trei surori",
    "Heather Morris – Călătoria Cilcăi",
    "Heather Morris – Tatuatorul de la Auschwitz",
    "Hanya Yanagihara – O viață măruntă",
    "Elle Kennedy – Scopul",
    "Elle Kennedy – Finalul",
    "Colleen Hoover – Ugly Love",
    "Colleen Hoover – Totul se termină cu noi",
    "Colleen Hoover – Slam",
    "Colleen Hoover – Heart Bones",
    "Colleen Hoover – Din toată inima",
    "Colleen Hoover – Verity",
    "Elena Armas – Din spania cu dragoste",
    "Elena Armas – Experiment în doi",
    "V.E. Schwab – Viața invizibilă a lui Addie LaRue"
  ];
  
 
  const RECOMMENDED_KEY = 'listaCartiRecomandate';
  let recommendedBooks = [];
  
  
  window.onload = function() {
    
    const saved = localStorage.getItem(RECOMMENDED_KEY);
    recommendedBooks = saved ? JSON.parse(saved) : [];
  
    
    const currentPage = window.location.pathname;
  
   
    if (currentPage.endsWith("lista.html")) {
      displayInitialBooks();
    }
  
   
    if (currentPage.endsWith("recomandate.html")) {
      displayRecommendedBooks();
    }
  };
  

  function displayInitialBooks() {
    const ul = document.getElementById("initialBookList");
    if (!ul) return;
  
    ul.innerHTML = "";
    initialBooks.forEach(book => {
      const li = document.createElement("li");
      li.textContent = book;
      ul.appendChild(li);
    });
  }

  function displayRecommendedBooks() {
    const ul = document.getElementById("recommendedList");
    if (!ul) return;
  
    ul.innerHTML = "";
    recommendedBooks.forEach(book => {
      const li = document.createElement("li");
      li.textContent = book;
      ul.appendChild(li);
    });
  }
  
  
  function addToRecommended(bookTitle) {
    recommendedBooks.push(bookTitle);
    localStorage.setItem(RECOMMENDED_KEY, JSON.stringify(recommendedBooks));
  }
  
  
  function searchInitialBook() {
    const searchInput = document.getElementById("searchInput");
    const searchResult = document.getElementById("searchResult");
    if (!searchInput || !searchResult) return;
  
    const query = searchInput.value.trim();
    if (!query) {
      searchResult.textContent = "Te rog introdu un titlu...";
      return;
    }
  
    
    const found = initialBooks.some(book =>
      book.toLowerCase().includes(query.toLowerCase())
    );
  
    if (found) {
      searchResult.textContent = `Cartea "${query}" se află deja în lista mea`;
    } else {
      
      searchResult.innerHTML = `
        Cartea "${query}" nu e în lista mea Vrei să o adaugi la recomandări?
        <button onclick="addNotFoundBook('${query}')">Adaugă la recomandări</button>
      `;
    }
  }
  
  function addNotFoundBook(title) {
    addToRecommended(title);
    const searchResult = document.getElementById("searchResult");
    searchResult.textContent = `Cartea "${title}" a fost adăugată la recomandări!`;
  }
  
  
  function recommendBook() {
    const recommendInput = document.getElementById("recommendInput");
    if (!recommendInput) return;
  
    const bookTitle = recommendInput.value.trim();
    if (bookTitle) {
      addToRecommended(bookTitle);
      recommendInput.value = "";
      alert(`Cartea "${bookTitle}" a fost adăugată la recomandări!`);
    }
  }
  