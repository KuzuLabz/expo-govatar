package govatar

import (
	"bytes"
	"encoding/base64"
	"fmt"
	"image"
	"image/png"

	"github.com/o1egl/govatar"
)

func GenerateAvatar(username string, gender int) string {
	var img image.Image
	var err error

	// Default to MALE if invalid gender value
	avatarGender := govatar.MALE
	if gender == 1 {
		avatarGender = govatar.FEMALE
	}

	if username != "" {
		img, err = govatar.GenerateForUsername(avatarGender, username)
	} else {
		img, err = govatar.Generate(avatarGender)
	}

	if err != nil {
		return ""
	}

	// Convert image to base64
	buf := new(bytes.Buffer)
	if err := png.Encode(buf, img); err != nil {
		return ""
	}

	// Convert to base64 string
	base64Str := base64.StdEncoding.EncodeToString(buf.Bytes())
	fmt.Println(base64Str)
	return base64Str
}
