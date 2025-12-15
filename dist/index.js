/**
 * bocum-not-paid-js - Payment overdue warning library
 * Applies visual warnings when payment deadlines are missed
 */

export function bocumNotPaid({
  deadline,
  opacity = 0.4,
  graceDays = 0,
  message = 'Payment overdue',
} = {}) {
  // Validate required deadline parameter
  if (!deadline) {
    console.error('bocum-not-paid-js: deadline parameter is required')
    return
  }

  const today = new Date()
  const deadlineDate = new Date(deadline)

  // Add grace days to deadline
  deadlineDate.setDate(deadlineDate.getDate() + graceDays)

  // If not overdue, do nothing
  if (today <= deadlineDate) return

  // Apply opacity and disable interaction to body
  document.body.style.opacity = opacity
  document.body.style.pointerEvents = 'none'

  // Create and append warning banner
  const banner = document.createElement('div')
  banner.innerText = message

  Object.assign(banner.style, {
    position: 'fixed',
    top: '0',
    left: '0',
    width: '100%',
    padding: '12px',
    background: 'red',
    color: 'white',
    textAlign: 'center',
    zIndex: '999999',
    pointerEvents: 'auto',
    fontFamily: 'system-ui, -apple-system, sans-serif',
    fontSize: '16px',
    fontWeight: 'bold',
    boxShadow: '0 2px 10px rgba(0,0,0,0.3)',
  })

  document.body.appendChild(banner)
}
