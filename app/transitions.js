export default function () {
  this.transition(
    this.fromRoute('infinitescroll'),
    this.toRoute('details'),
    this.use('toLeft'),
    this.reverse('toRight')
  );
};
