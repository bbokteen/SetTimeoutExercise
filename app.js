// SET TIMEOUT METHOD

// 1a
setTimeout(() => {
    // 1b
    const first = document.querySelector('#first');
    // Or
    /*
    const first = document.getElementById('first');
    const first = document.querySelector('div');
    */
    // 1c
    const p1 = document.createElement('p');
    // 1d
    p1.innerText = `Hi`;
    // 1e
    first.append(p1);
  }, 1000);
  
  // 2a
  setTimeout(() => {
    // 2b
    const nesting = document.querySelector('#nesting');
    // Or
    // const nesting = document.getElementById('nesting');
    // 2c
    const p2 = document.createElement('p');
    // 2d
    p2.innerText = "Outer";
    // 2e
    nesting.append(p2);
    // 2f
    setTimeout(() => {
      // 2g
      const p3 = document.createElement('p');
      // 2h
      p3.innerText = "Inner";
      // 2i
      nesting.append(p3);
    }, 1000);
  }, 2000);
  
  
  // 3a
  const count = document.querySelector('#count');
  // 3b
  const num = document.createElement('h1');
  // 3c
  count.append(num);
  num.innerText = 3;
  
  setTimeout(() => {
    num.innerText--;
    // Or
    /*
    num.innerText -= 1;
    num.innerText = num.innerText - 1;
    */
    setTimeout(() => {
      num.innerText--;
      setTimeout(() => {
        // num.innerText--;
        // 3d
        const body = document.querySelector('body');
        body.classList.add('background');
        // Or
        // document.querySelector('body').classList.add('background');
      }, 1000);
    }, 1000);
  }, 1000);
  
  