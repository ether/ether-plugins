![Publish Status](https://github.com/ether/ep_disable_imports/workflows/Node.js%20Package/badge.svg) ![Backend Tests Status](https://github.com/ether/ep_disable_imports/workflows/Backend%20tests/badge.svg)

# ep_disable_imports

[Etherpad](https://etherpad.org/) plugin to selectively or completely disable
imports.

## Installation

From the Etherpad working directory, run:

```shell
npm install --no-save --legacy-peer-deps ep_disable_imports
```

Or, install from Etherpad's `/admin/plugins` page.

## Configuration

All imports are disabled by default. To selectively disable certain file types,
edit your `settings.json`:

```json
  "ep_disable_imports": {
    // You can either deny specific filename extensions:
    "deny": ["etherpad", "docx"],
    // Or only permit select filename extensions:
    "allow": ["html"]
  },
```

Details:

  * `deny`: A list of case-insensitive filename extensions to prohibit. Any file
    with an extension in this list is rejected. A leading period is
    automatically added to each extension if missing.
  * `allow`: A list of case-insensitive filename extensions to allow. Any file
    with an extension not in this list is rejected. A leading period is
    automatically added to each extension if missing.

If neither `deny` nor `allow` are specified, all imports are prohibited. If both
`deny` and `allow` are specified, the file's extension must be in `allow` and
must not be in `deny` (`deny` takes precedence over `allow`).

## Testing

To run the backend tests, run the following from the Etherpad working directory:

```shell
(cd src && npm test)
```

To run the frontend tests, visit: http://localhost:9001/tests/frontend/

## Copyright and License

Copyright © 2021 Richard Hansen
and the ep_disable_imports authors and contributors

Licensed under the [Apache License, Version 2.0](LICENSE) (the "License"); you
may not use this file except in compliance with the License. You may obtain a
copy of the License at

http://www.apache.org/licenses/LICENSE-2.0

Unless required by applicable law or agreed to in writing, software distributed
under the License is distributed on an "AS IS" BASIS, WITHOUT WARRANTIES OR
CONDITIONS OF ANY KIND, either express or implied. See the License for the
specific language governing permissions and limitations under the License.
