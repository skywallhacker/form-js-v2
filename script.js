let form = document.querySelector('.form')

let inpts = form.querySelectorAll('.input_item_act input')

let comp = document.querySelector('.com')

let erro = document.querySelector('.err')

let btn = document.querySelector('button')

let loud = document.querySelector('.loader')

let err = 0

let com = 0

form.onsubmit = (event) => {
    event.preventDefault();
    let isError = false

    inpts.forEach(inp => {

        if (inp.value.length === 0) {
            isError = true
            inp.classList.add('error')
            btn.style.background = 'red'
            btn.style.border = 'red'
        } else {
            inp.classList.remove('error')
        }
        let inpParent = inp.parentElement.parentElement
        let inp_p = inpParent.querySelector('p')
        let inp_span = inpParent.querySelector('span')
        let inp_img = inpParent.querySelector('img')

        if (inp.classList.contains('error')) {
            err += 1
            erro.innerHTML = err
            inp_p.style.color = 'red'
            inp_span.style.color = 'red'
            inp_img.style.display = 'unset'
        } else {
            inp_p.style.color = '#4200FF'
            inp_span.style.color = '#949494'
            inp_img.style.display = 'none'
            com += 1
            comp.innerHTML = com
            
        }

        if (inpParent.classList.contains('input_item')) {
            inp_p.style.color = 'black'
        }

        

    })

    if (isError === false) {
        submit()
    }

    loud.style.display = 'unset'
        setTimeout(() => {
            loud.style.display = 'none'
        },3000)

    btn.onclick = () => {
        if (com >= 0) {
            com = 0
            comp.innerHTML = 0
        }
        if (err > 0) {
            err = 0
            erro.innerHTML = 0
        }
        
    }

}
function submit(params) {
    let user = {}

    let fm = new FormData(form)

    fm.forEach((value, key) => {
        user[key] = value
    })

    console.log(user);
}

let demo = document.querySelector('.demo')

setTimeout(() => {
    demo.style.opacity = 0
    // demo.style.display = 'none'
},3000)

setTimeout(() => {
    
    demo.style.display = 'none'
},5000)
