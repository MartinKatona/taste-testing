export const Sticky = (el: any, binding: any) => {
  el.style.top = (binding.value > 0 ? binding.value : 48) + "px";
  el.style.position = "sticky";
  el.style.zIndex = "20";
  el.classList.add("sticky-header");
};
