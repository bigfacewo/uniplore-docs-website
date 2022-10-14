---
sidebar_position: 6
---
### 组件介绍
**“新建分类”（Create Class）**控件用于创建新的分类属性，在输入端接收数据集，根据现有的离散型属性以及字符型属性创建一个新的分类属性，该控件匹配用户所选属性的值，并为匹配的实例构建新的用户定义值。

<hr/>

- 输入：
  - data：数据集
- 输出：
  - data：处理后的数据集

<hr/>


### 页面介绍
点击**“新建分类”（Create Class）**控件查看参数配置页面，如下图所示：  
[ ![](/img/aistudio/feature-engineering/create-class/param.png) ](/img/aistudio/feature-engineering/create-class/param.png)

#### 参数选项
<table>
  <tr>
    <th>选项</th>
    <th width="650">说明</th>
    <th>样例值</th>
  </tr>
  <tr>
      <td>属性名称</td> 
      <td>
      新的分类属性的名称
      </td> 
      <td></td>
  </tr>
  <tr>
      <td>匹配设置（属性选择）</td> 
      <td>
      根据哪个属性构造新的分类属性
      </td> 
      <td></td>
  </tr>
  <tr>
      <td>匹配设置（匹配信息）</td> 
      <td>
      别名：新分类属性中的值<br/>
      子串：正则表达式定义的匹配条件，匹配1中定义的属性的值<br/>
      实点击“Add”添加新的分类属性的值，点击“Delete”删除对应的值
      </td> 
      <td></td>
  </tr>
  <tr>
      <td>仅在开始时匹配</td> 
      <td>
      匹配是否从字符串开头开始匹配
      </td> 
      <td></td>
  </tr>
  <tr>
      <td>区分大小写</td> 
      <td>
      匹配时是否区分大小写
      </td> 
      <td></td>
  </tr>
</table>

### 使用案例
在下图所示的案例中，使用**“加载文件”（File）**控件加载数据，通过**“查看数据”（Data Table）**控件查看加载数据的信息，同时使用**“新建分类”（Create Class）**控件添加一个新的分类属性，之后通过**“查看数据”（Data Table）**控件查看处理后的数据集。   
[ ![](/img/aistudio/feature-engineering/create-class/workflow.png) ](/img/aistudio/feature-engineering/create-class/workflow.png)

案例中加载 car 数据集，基于原始数据集中的【persons】属性创建一个与车型相匹配新的分类属性。案例中控件的配置以及执行结果如下图所示。    
[ ![](/img/aistudio/feature-engineering/create-class/workflow-result.png) ](/img/aistudio/feature-engineering/create-class/workflow-result.png)