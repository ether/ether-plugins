![Publish Status](https://github.com/ether/ep_stable_authorid/workflows/Node.js%20Package/badge.svg) ![Backend Tests Status](https://github.com/ether/ep_stable_authorid/workflows/Backend%20tests/badge.svg)

# ep\_stable\_authorid

Etherpad plugin to give authenticated users the same author ID every time they
log in. Different authenticated users get different author IDs.

Note: Etherpad limits the number of concurrent connections to one per pad per
author ID, so a single authenticated user will not be able to view the same pad
from two different browsers/tabs/devices at the same time (the older connection
will be automatically disconnected).

This plugin requires Etherpad v1.9.0 or later.

## Configuration

#### Example

The following shows the default settings:

```json
  "ep_stable_authorid": {
    "exclude": ["admin", "guest"]
  },
```

#### Details

  * `exclude` (optional, defaults to `["admin", "guest"]`): Users this plugin
    should ignore.

## Interaction with the ep\_guest Plugin

The [ep\_guest](https://github.com/ether/ep_guest#readme) plugin "authenticates"
anonymous users as a special guest user. Etherpad core does not treat this
special guest account specially when compared to any other user account. To make
it possible for multiple guest users to access a pad at the same time, add the
guest username to the `exclude` list.

When a user logs in or out their author ID will change, which avoids awkward
effects such as edits credited to someone named "Read-Only Guest".

## Copyright and License

Copyright © 2022 Richard Hansen <rhansen@rhansen.org> and the
ep\_stable\_authorid authors and contributors

Licensed under the [Apache License, Version 2.0](LICENSE) (the "License"); you
may not use this file except in compliance with the License. You may obtain a
copy of the License at

http://www.apache.org/licenses/LICENSE-2.0

Unless required by applicable law or agreed to in writing, software distributed
under the License is distributed on an "AS IS" BASIS, WITHOUT WARRANTIES OR
CONDITIONS OF ANY KIND, either express or implied. See the License for the
specific language governing permissions and limitations under the License.
