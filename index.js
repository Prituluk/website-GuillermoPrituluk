const $form = document.querySelector('#form');
const btnMailto = document.querySelector('#mailto');

$form.addEventListener('submit', handleSubmit);


function handleSubmit(event) {
  event.preventDefault()
  const form = new FormData($form)
  const name = form.get('name');
  const email = form.get('email');
  const message = form.get('message');

  btnMailto.setAttribute('href', `mailto:guillermoprituluk@gmail.com?subject=${name}&subject= ${email}&body=${message}`)
  btnMailto.click();
}