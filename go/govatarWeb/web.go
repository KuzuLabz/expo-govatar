//go:build js && wasm
// +build js,wasm

package main

import (
	"bytes"
	"encoding/base64"
	"image"
	"image/png"
	"syscall/js"

	"github.com/o1egl/govatar"
)

func generateAvatar(_ js.Value, args []js.Value) interface{} {
	var img image.Image
	var err error

	// Default to MALE if invalid gender value
	avatarGender := govatar.MALE
	if args[1].Int() == 1 {
		avatarGender = govatar.FEMALE
	}

	if args[0].String() != "" {
		img, err = govatar.GenerateForUsername(avatarGender, args[0].String())
	} else {
		img, err = govatar.Generate(avatarGender)
	}

	if err != nil {
		return map[string]interface{}{
			"avatar": "",
		}
	}

	// Convert image to base64
	buf := new(bytes.Buffer)
	if err := png.Encode(buf, img); err != nil {
		return map[string]interface{}{
			"avatar": "",
		}
	}

	// Convert to base64 string
	base64Str := base64.StdEncoding.EncodeToString(buf.Bytes())

	return map[string]interface{}{
		"avatar": base64Str,
	}
}

func registerCallbacks() {
	js.Global().Set("generateAvatar", js.FuncOf(generateAvatar))
}

func main() {
	c := make(chan struct{}, 0)
	registerCallbacks()
	println("ExpoGovatar Web is Ready")
	<-c
}
