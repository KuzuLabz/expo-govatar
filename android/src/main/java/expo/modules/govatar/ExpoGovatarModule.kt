package expo.modules.govatar

import expo.modules.kotlin.modules.Module
import expo.modules.kotlin.modules.ModuleDefinition
import java.net.URL

import govatar.Govatar

class ExpoGovatarModule : Module() {
  override fun definition() = ModuleDefinition {
    Name("ExpoGovatar")

    AsyncFunction("getAvatar") { username: String, gender: Long ->

      return@AsyncFunction Govatar.generateAvatar(username, gender)
    }
  }
}
