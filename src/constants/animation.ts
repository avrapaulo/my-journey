export const logos = {
  hidden: { scale: 0.85, opacity: 0 },
  visible: {
    scale: 1,
    opacity: 1,
    transition: { duration: 1 }
  }
}

export const homeImage = {
  hidden: { opacity: 0, y: 30 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      ease: 'easeOut',
      duration: 1
    }
  }
}

export const homeTitle = {
  ...homeImage,
  visible: {
    ...homeImage.visible,
    transition: {
      ...homeImage.visible.transition,
      duration: 1.5
    }
  }
}

const visible = {
  opacity: 1,
  x: 0,
  transition: {
    duration: 1
  }
}

export const text = {
  hidden: { opacity: 0, x: 40 },
  visible
}

export const title = {
  hidden: { opacity: 0.5, x: 25 },
  visible
}

export const skillBarTitle = {
  hidden: { opacity: 0.5, x: -25 },
  visible
}
