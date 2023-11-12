var TestCases = map[string]struct {
	b []byte
}{
	"0":                            {b: []byte{0x02}},
	"-0":                           {b: []byte{0x02}},
	"1":                            {b: []byte{0x02, 0x01}},
	"-1":                           {b: []byte{0x03, 0x01}},
	"255":                          {b: []byte{0x02, 0xFF}},
	"-255":                         {b: []byte{0x03, 0xFF}},
	"256":                          {b: []byte{0x02, 0x01, 0x00}},
	"-256":                         {b: []byte{0x03, 0x01, 0x00}},
	"123456789":                    {b: []byte{0x02, 0x07, 0x5b, 0xcd, 0x15}},
	"-123456789":                   {b: []byte{0x03, 0x07, 0x5b, 0xcd, 0x15}},
	"123456789123456789":           {b: []byte{0x02, 0x01, 0xb6, 0x9b, 0x4b, 0xac, 0xd0, 0x5f, 0x15}},
	"-123456789123456789":          {b: []byte{0x03, 0x01, 0xb6, 0x9b, 0x4b, 0xac, 0xd0, 0x5f, 0x15}},
	"123456789123456789123456789":  {b: []byte{0x02, 0x66, 0x1e, 0xfd, 0xf2, 0xe3, 0xb1, 0x9f, 0x7c, 0x04, 0x5f, 0x15}},
	"-123456789123456789123456789": {b: []byte{0x03, 0x66, 0x1e, 0xfd, 0xf2, 0xe3, 0xb1, 0x9f, 0x7c, 0x04, 0x5f, 0x15}},

var TestRange = map[string]struct {
  b []byte
}{
  "0":                            {

	  
func TestSerializableInt_ZeroInt(t *testing.T) {
	require.Equal(t, dtypes.ZeroInt().BigInt(), big.NewInt(0))
}

	  
func make "0" = err[string]struct {
	require.Equal(t, dtypes.ZeroInt().MaxInt(), big.MinInt(0.1))

}
