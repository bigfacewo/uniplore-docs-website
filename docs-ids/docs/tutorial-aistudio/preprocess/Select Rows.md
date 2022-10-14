---
sidebar_position: 0
---
### 组件介绍
**“条件筛选”（Select Rows）**控件允许用户设置条件对数据集进行过滤。

<hr/>

- 输入：
  - data：数据集
- 输出：
  - data：条件筛选后的数据集

<hr/>


### 页面介绍
点击**“条件筛选”（Select Rows）**控件查看参数配置页面，如下图所示：  
[ ![](/img/aistudio/preprocess/select-rows/param.png) ](/img/aistudio/preprocess/select-rows/param.png)

点击**“打开控件配置”**按钮，弹出条件配置页面，添加过滤条件
[ ![](/img/aistudio/preprocess/select-rows/interaction.png) ](/img/aistudio/preprocess/select-rows/interaction.png)

#### 参数选项
<table>
  <tr>
    <th>选项</th>
    <th width="650">说明</th>
    <th>样例值</th>
  </tr>
  <tr>
      <td>过滤条件</td> 
      <td>
      显示用户已经定义并添加的条件信息：<br/>
      &emsp;&emsp;点击“添加”按钮将添加一条新的过滤条件，用户可配置过滤属性、过滤操作符、过滤值<br/>
      &emsp;&emsp;点击“添加所有属性”按钮将为每个属性的添加过滤条件供用户配置<br/>
      &emsp;&emsp;点击“移除所有属性”按钮将移除所有过滤条件<br/>
      &emsp;&emsp;点击过滤条件右侧的“移除”按钮，将移除对应的过滤条件
      </td> 
      <td></td>
  </tr>
  <tr>
      <td>属性列</td> 
      <td>
      用户可以根据需求选择属性设置条件。
      </td> 
      <td></td>
  </tr>
  <tr>
      <td>操作符</td> 
      <td>
      根据数据类型的不同，操作符列表也不尽相同：<br/>
      &emsp;&emsp;对于 categorical（离散型）数据，操作符包括 "is", "is not", "is one of", "is defined" 四种<br/>
      &emsp;&emsp;对于 numeric（连续型）和 datetime（日期型）数据，操作符主要包括 "=", "&lt;&gt;", "&lt;", "&lt;=", "&gt;", "&gt;=", "are between", "are outside" 八种<br/>
      &emsp;&emsp;对于 text（字符型）数据，操作符包括  "=", "&lt;&gt;", "&lt;", "&lt;=", "&gt;", "&gt;=", "are between", "are outside", "contain", "begin with", "end with", "is defined" 十二种
      </td> 
      <td></td>
  </tr>
  <tr>
      <td>值</td> 
      <td>
      当数据类型为 categorical（离散型）数据时，值列表将列出所有的离散数据<br/>
      当数据类型为 numeric（连续型）数据或者 text（字符型）数据时，需要用户自己输入
      </td> 
      <td></td>
  </tr>
</table>

### 使用案例
在下图所示的案例中，使用**“加载文件”（File）**控件加载数据，通过**“查看数据”（Data Table）**控件查看加载数据的信息，同时使用**“条件筛选”（Select Rows）**控件设置数据过滤条件，之后通过**“查看数据”（Data Table）**控件查看处理后的数据集。   
[ ![](/img/aistudio/preprocess/select-rows/workflow.png) ](/img/aistudio/preprocess/select-rows/workflow.png)

案例中采用 iris 数据集，设定了基于属性【iris】 以及属性【sepal length】的两个条件进行数据过滤。案例中控件的配置以及执行结果如下图所示。    
[ ![](/img/aistudio/preprocess/select-rows/workflow-result.png) ](/img/aistudio/preprocess/select-rows/workflow-result.png)