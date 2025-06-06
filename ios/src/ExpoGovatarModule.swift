import ExpoModulesCore
import Govatar

public class ExpoGovatarModule: Module {
  public func definition() -> ModuleDefinition {
    Name("ExpoGovatar")

    AsyncFunction("getAvatar") { (username: String, gender: Int) in
      return GovatarGenerateAvatar(username, gender)
    }
  }
}
