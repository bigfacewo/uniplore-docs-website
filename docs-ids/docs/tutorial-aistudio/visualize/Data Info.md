### 组件介绍
**“数据信息（Data Info）”**控件用于显示数据集的相关信息。
<hr/>

- 输入：
  - data: 输入的数据集
- 输出：
  - 无

<hr/>


### 页面介绍
点击**“数据信息（Data Info）”**控件查看参数配置页面，如下图所示：  
![param](/img/aistudio/visualize/data-info/param.png)

#### 参数选项
<table>
  <tr>
    <th></th>
    <th>选项</th>
    <th width="650">说明</th>
    <th>样例值</th>
  </tr>
  <tr>
      <td>数据集大小</td> 
      <td>
       显示数据集的相关信息，包括数据集大小，属性个数
      </td> 
      <td></td>
  </tr>
  <tr>
      <td>特征列</td> 
      <td>
      显示特征属性（feature）中离散型、数值型、日期型、文本型属性的个数
      </td> 
      <td></td>
  </tr>
  <tr>
      <td>目标列</td> 
      <td>
       显示分类属性（ class or target）的信息，如果分类属性是离散型属性，也会展示类别个数
      </td> 
      <td></td>
  </tr>
  <tr>
      <td>元属性列</td> 
      <td>
       显示 meta（元属性）的信息
      </td> 
      <td></td>
  </tr>
  <tr>
      <td>数据位置</td> 
      <td>
       显示数据的存储位置
      </td> 
      <td></td>
  </tr>
</table>

### 使用案例
在下图所示的案例中，使用**“加载文件（File）”**控件加载数据集，接着使用**“数据信息（Data Info）”**控件查看加载的数据集。
![workflow](/img/aistudio/visualize/data-info/workflow.png)

案例中加载“iris”数据集，案例中控件的配置以及执行结果如下图所示。
![visualization](/img/aistudio/visualize/data-info/visualization.png)