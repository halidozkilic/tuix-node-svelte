const getTroops = async (req, res) => {
  const count = req.body.count

  const spearMen = Math.floor(Math.random() * (count - 1) + 1)
  const swordMen = Math.floor(Math.random() * (count - spearMen - 1) + 1)
  const archers = (count - spearMen - swordMen)

  if (archers === 0) {
    return await getTroops(req, res)
  }

  const result = {
    spearMen,
    swordMen,
    archers
  }

  return res.status(200).json({ success: true, data: result })
}

module.exports = { getTroops }
