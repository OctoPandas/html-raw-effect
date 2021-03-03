import './magnifier.less'

// 创建元素并放入 DOM
const $cat = document.createElement('div')
document.body.append($cat)
$cat.id = 'cat'

// 鼠标进入时做一个标记
const onMouseEnter = e => {
  e.target.setAttribute('zoomed', 1)
  onMouseMove(e)
}

// 鼠标移出时移出标记
const onMouseLeave = e => {
  e.target.removeAttribute('zoomed')
}

const onMouseMove = e => {
  // 获得 `$cat` 的宽度和高度
  // const { width, height } = $cat.getBoundingClientRect()
  const { left, top } = $cat.getBoundingClientRect()

  let x, y
  if (e.type.startsWith('touch')) {
    x = e.touches[0].pageX - left
    y = e.touches[0].pageY - top
    e.preventDefault()
  } else {
    // 获得鼠标相对于元素的偏移
    x = e.offsetX
    y = e.offsetY
  }

  // 设置 CSS 变量
  $cat.style.setProperty('--x', x )
  $cat.style.setProperty('--y', y )
}

// 添加鼠标事件处理
$cat.addEventListener('mouseenter', onMouseEnter)
$cat.addEventListener('mouseleave', onMouseLeave)
$cat.addEventListener('mousemove', onMouseMove)
// 添加触摸事件处理
$cat.addEventListener('touchstart', onMouseEnter)
$cat.addEventListener('touchend', onMouseLeave)
$cat.addEventListener('touchmove', onMouseMove)
